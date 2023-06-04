from fastapi import APIRouter, Depends
from queries.exercise import Error
from authenticator import authenticator
from zoneinfo import ZoneInfo
from typing import Union
from datetime import datetime
from routers.dashboard_by_date_handler import (
    DashboardByDateHandler,
    DashboardInfo,
)

router = APIRouter()


@router.get("/api/dashboard", response_model=Union[DashboardInfo, Error])
def get_dashboard_info(
    repo: DashboardByDateHandler = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    user_id = account_data["id"]
    dt = datetime.now(ZoneInfo("America/Los_Angeles"))
    today = dt.strftime("%Y-%m-%d")
    return repo.handle(user_id, today)
