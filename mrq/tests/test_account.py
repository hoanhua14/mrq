from fastapi.testclient import TestClient
from pydantic import BaseModel
from main import app
from authenticator import authenticator


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
    return AccountOut(
        id=1,
        first="Emma",
        last="Stone",
        email="EmmaStone@gmail.com",
        age=34,
        gender="Female",
        race="White",
    )


def test_get_all_accounts():
    app.dependency_overrides[
        authenticator.get_current_account_data
    ] = fake_get_current_account_data
    response = client.get("/api/accounts")
    app.dependency_overrides = {}
    assert response.status_code == 200
    assert response.json() == []
