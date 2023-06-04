from pydantic import BaseModel
from typing import List, Optional, Union
from datetime import date
from queries.pool import pool


class Error(BaseModel):
    message: str


class WaterIn(BaseModel):
    # user_id: int
    ounces: int
    date: date


class WaterOut(BaseModel):
    id: int
    user_id: int
    ounces: int
    date: date


class WaterRepository:
    def get_one_water_id(self, id: int) -> Optional[WaterOut]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT id
                             , user_id
                             , ounces
                             , date
                        FROM water
                        WHERE id = %s
                        """,
                        [id],
                    )
                    record = result.fetchone()
                    if record is None:
                        return None
                    return self.record_to_water_out(record)
        except Exception as e:
            print(e)
            return {"message": "Could not get the patricular Water data"}

    def get_all(self, user_id) -> Union[Error, List[WaterOut]]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT id
                             , user_id
                             , ounces
                             , date
                        FROM water
                        WHERE user_id = %s
                        ORDER BY date;
                        """,
                        [user_id],
                    )

                    return [
                        self.record_to_water_out(record) for record in result
                    ]
        except Exception as e:
            print(e)
            return {"message": "Could not get all Water data"}

    def get_all_by_date(self, user_id, date) -> Union[Error, List[WaterOut]]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT id
                             , user_id
                             , ounces
                             , date
                        FROM water
                        WHERE user_id = %s AND date = %s
                        ORDER BY date;
                        """,
                        [user_id, date],
                    )

                    return [
                        self.record_to_water_out(record) for record in result
                    ]
        except Exception as e:
            print(e)
            return {"message": "Could not get all Water data"}

    def create(self, user_id, water: WaterIn) -> Union[WaterOut, Error]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        INSERT INTO water
                            (user_id, ounces, date)
                        VALUES
                            (%s, %s, %s)
                        RETURNING id;
                        """,
                        [user_id, water.ounces, water.date],
                    )
                    id = result.fetchone()[0]
                    return self.water_in_to_out(id, user_id, water)
        except Exception:
            return {"message": "Create Water did not work"}

    def delete(self, id: int, user_id: int) -> bool:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        DELETE FROM water
                        WHERE id = %s
                        AND user_id = %s
                        """,
                        [id, user_id],
                    )
                    return result.rowcount > 0
        except Exception as e:
            print(e)
            return False

    def water_in_to_out(self, id: int, user_id: int, water: WaterIn):
        old_data = water.dict()
        return WaterOut(id=id, user_id=user_id, **old_data)

    def record_to_water_out(self, record):
        return WaterOut(
            id=record[0],
            user_id=record[1],
            ounces=record[2],
            date=record[3],
        )
