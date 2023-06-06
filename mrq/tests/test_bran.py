from fastapi.testclient import TestClient
from queries.water_db import WaterRepository, WaterOut
from main import app
from authenticator import authenticator


client = TestClient(app)


class GetWaterQueries:
    def get_one_water_id(self, id):
        return WaterOut(
            id=7,
            user_id=5,
            ounces=16,
            date="2023-05-13",
        )


output_data = {"id": 7, "user_id": 5, "ounces": 16, "date": "2023-05-13"}


mock_user = {
    "id": 5,
    "first": "Nikki-a",
    "last": "Lastname-a",
    "email": "testa@gmail.com",
    "age": 19,
    "gender": "Male",
    "race": "White",
}


def account_override():
    return mock_user


def test_get_one_water_id():
    app.dependency_overrides[WaterRepository] = GetWaterQueries
    app.dependency_overrides[
        authenticator.try_get_current_account_data
    ] = account_override
    response = client.get("/api/water/7")
    print(response)
    app.dependency_overrides = {}
    assert response.status_code == 200
    assert response.json() == output_data
