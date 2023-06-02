from pydantic import BaseModel

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
        first="LeBron",
        last="James",
        email="LeBronJames@gmail.com",
        age=38,
        gender="Male",
        race="Black or African American"
    )
