from pydantic import BaseModel
from typing import List, Optional, Union
from datetime import date
from queries.pool import pool

class Error(BaseModel):
    message: str

class ExerciseIn(BaseModel):
    minutes: int
    date: date
    category: str

class ExerciseOut(BaseModel):
    id: int
    user_id: int
    minutes: int
    date: date
    category: str



class ExerciseRepository:
    def create(self, user_id, exercise: ExerciseIn) -> Union[ExerciseOut, Error]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        INSERT INTO exercise
                            (user_id, minutes, date, category)
                        VALUES
                            (%s, %s, %s, %s)
                        RETURNING id, user_id;
                        """,
                        [
                            user_id,
                            exercise.minutes,
                            exercise.date,
                            exercise.category
                        ]

                    )
                    id = result.fetchone()[0]
                    return self.exercise_in_to_out(id, user_id, exercise)
        except Exception as e:
            return {"message": str(e)}

    def exercise_in_to_out(self, id:int, user_id: int, exercise: ExerciseIn):
        old_data = exercise.dict()
        return ExerciseOut(id=id, user_id=user_id, **old_data)

    def get_all(self, user_id) -> Union[Error, List[ExerciseOut]]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT id, user_id, minutes, date, category
                        from exercise
                        WHERE user_id = %s
                        """,
                        [user_id]
                    )
                    return [
                        self.record_to_exercise_out(record)
                        for record in result
                    ]
        except Exception as e:
            print(e)
            return {"message": "Could not get all exercises"}

    def record_to_exercise_out(self, record):
        return ExerciseOut(
            id=record[0],
            user_id=record[1],
            minutes=record[2],
            date=record[3],
            category=record[4]
        )

    def delete(self, id: int, user_id:int) -> bool:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        DELETE FROM exercise
                        WHERE id = %s
                        AND user_id = %s
                        """,
                        [
                            id,
                            user_id
                        ]
                    )
                    return result.rowcount > 0
        except Exception as e:
            print(e)
            return False
