from fastapi import APIRouter, Depends, Response
from queries.sleep import SleepIn, SleepRepository, SleepOut, Error
from typing import Union, List
from authenticator import authenticator

router = APIRouter()

@router.post("/api/sleep", response_model=Union[SleepOut, Error])
def create_sleep(
    sleep: SleepIn,
    response: Response,
    repo: SleepRepository = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data)
):
    user_id = account_data["id"]
    return repo.create(user_id, sleep)

@router.get("/api/sleep", response_model=Union[List[SleepOut], Error])
def get_all_sleep(
    repo: SleepRepository = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data)
):
    user_id = account_data["id"]
    return repo.get_all_sleep(user_id)

@router.delete("/api/sleep/{id}", response_model=bool)
def delete_sleep(
    id: int,
    repo: SleepRepository = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
) -> bool:
    user_id = account_data["id"]
    return repo.delete_sleep(id, user_id)
