from fastapi import (
    Depends,
    HTTPException,
    status,
    Response,
    APIRouter,
    Request,
)
from typing import Optional, Union, List
from jwtdown_fastapi.authentication import Token
from authenticator import authenticator

from pydantic import BaseModel

from queries.accounts import (
    Error,
    AccountIn,
    AccountOut,
    AccountOutWithPassword,
    AccountQueries,
    DuplicateAccountError
)

class AccountForm(BaseModel):
    username: str
    password: str

class AccountToken(Token):
    account: AccountOut

class HttpError(BaseModel):
    detail: str

router = APIRouter()

# allows people to POST (create) accounts
@router.post("/api/accounts", response_model=AccountToken | HttpError)
async def create_account(
    info: AccountIn,
    request: Request,
    response: Response,
    repo: AccountQueries = Depends(),
):
    hashed_password = authenticator.hash_password(info.password)
    print("here hashed_password",hashed_password)
    try:
        account = repo.create(info, hashed_password)
        print("account from create method",account)
    except DuplicateAccountError:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Cannot create an account with those credentials",
        )
    form = AccountForm(username=info.email, password=info.password)
    token = await authenticator.login(response, request, form, repo)
    return AccountToken(account=account, **token.dict())

# GETs ALL accounts
@router.get("/api/accounts", response_model=Union[List[AccountOut], Error])
def get_all(
    repo: AccountQueries = Depends(),
):
    return repo.get_all()

# GET specific details of ONE account
@router.get("/api/accounts/{id}", response_model=Optional[AccountOutWithPassword])
def get_one_account(
    id: int,
    response: Response,
    repo: AccountQueries = Depends(),
) -> Optional[AccountOutWithPassword]:
    account = repo.get_one(id)
    if account is None:
        response.status_code = 404
    print (account)
    return account
