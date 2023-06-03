from fastapi.testclient import TestClient
from main import app
from pydantic import BaseModel, Field
from datetime import date
from authenticator import authenticator
from queries.sleep import SleepRepository


# class SleepOutInstance(BaseModel):
#     id: int
#     user_id: int
#     hours: int
#     date: date
#     quality: int = Field(ge=1, le=5)


client = TestClient(app)


class AccountOut(BaseModel):
    id: int
    first: str
    last: str
    email: str
    age: int
    gender: str
    race: str


class EmptySleepRepository:
    def get_all_sleep(self, user_id):
        return []


def fake_get_current_account_data():
    account = AccountOut(
        id=1,
        first="Jennie",
        last="Kim",
        email="jennie@kim.com",
        age=21,
        gender="Female",
        race="Asian",
    )
    return account.__dict__


def test_get_a_sleep():
    # arrange:
    app.dependency_overrides[SleepRepository] = EmptySleepRepository
    app.dependency_overrides[
        authenticator.get_current_account_data
    ] = fake_get_current_account_data
    # act:
    response = client.get("/api/sleep")
    app.dependency_overrides = {}
    # assert:
    assert response.status_code == 200
    assert response.json() == []
