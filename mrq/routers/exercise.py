from fastapi import APIRouter, Depends, Response
from queries.exercise import ExerciseIn, ExerciseOut, ExerciseRepository, Error
from authenticator import authenticator
from typing import Union, List



router = APIRouter()


@router.post("/api/exercise", response_model=Union[ExerciseOut, Error])
async def create_exercise(
    exercise: ExerciseIn,
    response: Response,
    repo: ExerciseRepository = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),


):
    user_id = account_data["id"]
    return repo.create(user_id, exercise)

@router.get("/api/exercise", response_model=Union[List[ExerciseOut], Error])
def get_all_exercise(
    repo: ExerciseRepository = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),

):
    user_id = account_data["id"]
    return repo.get_all(user_id)

@router.delete("/api/exercise/{id}", response_model=bool)
def delete_exercise(
    id: int,
    repo: ExerciseRepository = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
) -> bool:
    user_id = account_data["id"]
    return repo.delete(id, user_id)
