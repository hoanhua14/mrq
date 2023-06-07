from fastapi import APIRouter, Depends, Response
from typing import List, Optional, Union
from authenticator import authenticator
from queries.water_db import (
    Error,
    WaterIn,
    WaterRepository,
    WaterOut,
)

router = APIRouter()


@router.get("/api/water/{id}", response_model=Optional[WaterOut])
def get_one_water(
    id: int,
    response: Response,
    repo: WaterRepository = Depends(),
) -> WaterOut:
    water = repo.get_one_water_id(id)
    if water is None:
        response.status_code = 404
    return water


@router.get("/api/water", response_model=Union[List[WaterOut], Error])
def get_all_water(
    repo: WaterRepository = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    user_id = account_data["id"]
    return repo.get_all(user_id)


@router.post("/api/water", response_model=Union[WaterOut, Error])
def create_water(
    water: WaterIn,
    response: Response,
    repo: WaterRepository = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    user_id = account_data["id"]
    return repo.create(user_id, water)


@router.delete("/api/water/{id}", response_model=bool)
def delete_water(
    id: int,
    repo: WaterRepository = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
) -> bool:
    user_id = account_data["id"]
    return repo.delete(id, user_id)
