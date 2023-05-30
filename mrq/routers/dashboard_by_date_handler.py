from fastapi import Depends, Response
from queries.exercise import ExerciseRepository, ExerciseOut
from queries.sleep import SleepRepository
from queries.water_db import WaterRepository
from pydantic import BaseModel
from datetime import date
from datetime import timedelta, datetime

class DashboardInfo(BaseModel):
    exercise: int
    sleep: int
    water: int


class DashboardByDateHandler:
    def __init__(
            self,
            ex_repo: ExerciseRepository = Depends(),
            sl_repo: SleepRepository = Depends(),
            wa_repo: WaterRepository = Depends(),
    ):
        self.ex_repo = ex_repo
        self.sl_repo = sl_repo
        self.water_repo = wa_repo

    def handle(self, user_id, date):
        date_object = datetime.strptime(date, '%Y-%m-%d').date()
        yesterday = date_object - timedelta(days = 1)
        today_ex_entries = self.ex_repo.get_all_by_date(user_id, date)
        today_sleep_entries = self.sl_repo.get_all_by_date(user_id, yesterday)
        today_water_entries = self.water_repo.get_all_by_date(user_id, date)


        ex_sum = 0
        for entry in today_ex_entries:
            if today_ex_entries is None:
                return ex_sum
            else:
                ex_sum += entry.minutes


        sleep_sum = 0
        for entry in today_sleep_entries:
            if today_sleep_entries is None:
                return sleep_sum
            else:
                sleep_sum += entry.hours


        water_sum = 0
        for entry in today_water_entries:
            if today_water_entries is None:
                return water_sum
            else:
                water_sum += entry.ounces


        return {"exercise": ex_sum, "sleep": sleep_sum, "water": water_sum}
