from fastapi.testclient import TestClient
from pydantic import BaseModel
from main import app
from authenticator import authenticator
from queries.accounts import AccountQueries


client = TestClient(app)


class AccountOut(BaseModel):
    id: int
    first: str
    last: str
    email: str
    age: int
    gender: str
    race: str


def fake_get_current_account_data():
    account = AccountOut[
        {
            "id": 1,
            "first": "Emma",
            "last": "Stone",
            "email": "EmmaStone@gmail.com",
            "age": 34,
            "gender": "Female",
            "race": "White",
        },
        {
            "id": 2,
            "first": "LeBron",
            "last": "James",
            "email": "LeBronJames@gmail.com",
            "age": 38,
            "gender": "Male",
            "race": "Black or African American",
        },
        {
            "id": 3,
            "first": "Alicia",
            "last": "Keys",
            "email": "AliciaKeys@gmail.com",
            "age": 42,
            "gender": "Female",
            "race": "Black or African American",
        },
    ]
    return account.__dict__


class EmptyAccountQuery:
    def get_all(self):
        return []


def test_get_all_accounts():
    app.dependency_overrides[AccountQueries] = EmptyAccountQuery
    app.dependency_overrides[
        authenticator.get_current_account_data
    ] = fake_get_current_account_data
    response = client.get("/api/accounts")
    app.dependency_overrides = {}
    assert response.status_code == 200
    assert response.json() == []
