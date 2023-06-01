from pydantic import BaseModel
from datetime import date
from queries.pool import pool
from typing import List, Union


class SleepIn(BaseModel):
    hours: int
    date: date
    quality: int


class Error(BaseModel):
    message: str


class SleepOut(BaseModel):
    id: int
    user_id: int
    hours: int
    date: date
    quality: int


class SleepRepository:
    def create(self, user_id, sleep: SleepIn) -> Union[SleepOut, Error]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        INSERT INTO sleep
                            (user_id, hours, date, quality)
                        VALUES
                            (%s, %s, %s, %s)
                        RETURNING id, user_id;
                        """,
                        [user_id, sleep.hours, sleep.date, sleep.quality],
                    )
                    id = result.fetchone()[0]
                    return self.sleep_in_to_out(id, user_id, sleep)
        except Exception as e:
            print(e)
            return {"message": str(e)}

    def record_to_sleep_out(self, record):
        return SleepOut(
            id=record[0],
            user_id=record[1],
            hours=record[2],
            date=record[3],
            quality=record[4],
        )

    def sleep_in_to_out(self, id: int, user_id: int, sleep: SleepIn):
        old_data = sleep.dict()
        return SleepOut(id=id, user_id=user_id, **old_data)

    def get_all_sleep(self, user_id: int) -> Union[List[SleepOut], Error]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT id, user_id, hours, date, quality
                        FROM sleep
                        WHERE user_id = %s
                        """,
                        [user_id],
                    )
                    print(user_id)
                    return [
                        self.record_to_sleep_out(record) for record in result
                    ]
        except Exception as e:
            return {"message": str(e)}

    def get_all_by_date(
        self, user_id: int, date
    ) -> Union[List[SleepOut], Error]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT id, user_id, hours, date, quality
                        FROM sleep
                        WHERE user_id = %s AND date = %s
                        """,
                        [user_id, date],
                    )
                    print(user_id)
                    return [
                        self.record_to_sleep_out(record) for record in result
                    ]
        except Exception as e:
            return {"message": str(e)}

    def delete_sleep(self, id: int, user_id: int) -> bool:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        DELETE FROM sleep
                        WHERE id = %s
                        AND user_id = %s
                        """,
                        [id, user_id],
                    )
                    return result.rowcount > 0
        except Exception:
            return False
