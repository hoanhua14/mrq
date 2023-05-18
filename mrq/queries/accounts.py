from pydantic import BaseModel
from queries.pool import pool
from typing import Optional, Union, List

class Error(BaseModel):
    message: str

class DuplicateAccountError(ValueError):
    pass

class AccountIn(BaseModel):
    first: str
    last: str
    password: str
    email: str
    age: int
    gender: str
    race: str

class AccountOut(BaseModel):
    id: int
    first: str
    last: str
    email: str
    age: int
    gender: str
    race: str

class AccountOutWithPassword(AccountOut):
    hashed_password: str


class AccountQueries:
    def record_to_account_out(self, record) -> AccountOutWithPassword:
        account_dict = AccountOutWithPassword(
            id=record[0],
            first=record[1],
            last=record[2],
            hashed_password=record[3],
            email=record[4],
            age=record[5],
            gender=record[6],
            race=record[7]
        )
        print(account_dict)
        return account_dict

    def create(self, user: AccountIn,
               hashed_password: str) -> AccountOutWithPassword:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        INSERT INTO users
                            (first,
                            last,
                            hashed_password,
                            email,
                            age,
                            gender,
                            race)
                        VALUES
                            (%s, %s, %s, %s, %s, %s, %s)
                        RETURNING
                        id,
                        first,
                        last,
                        hashed_password,
                        email,
                        age,
                        gender,
                        race;
                        """,
                        [
                            user.first,
                            user.last,
                            hashed_password,
                            user.email,
                            user.age,
                            user.gender,
                            user.race,
                        ]
                    )
                    print("insert worked?")
                    id = result.fetchone()[0]
                    print("ID GOTTEN", id)
                    return AccountOutWithPassword(
                        id = id,
                        first = user.first,
                        last = user.last,
                        hashed_password = hashed_password,
                        email = user.email,
                        age = user.age,
                        gender = user.gender,
                        race = user.race,
                    )
        except Exception:
            return {"message": "Could not create user!!"}

    def get(self, email: str) -> AccountOutWithPassword:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT
                        id,
                        first,
                        last,
                        hashed_password,
                        email,
                        age,
                        gender,
                        race
                        FROM users
                        WHERE email = %s
                        """,
                        [email],
                    )
                    record = result.fetchone()
                    print("record found", record)
                    if record is None:
                        return None
                    return self.record_to_account_out(record)
        except Exception:
            return {"message": "Could not return account!!"}

    def get_all(self) -> Union[Error, List[AccountOutWithPassword]]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT id
                            , first
                            , last
                            , hashed_password
                            , email
                            , age
                            , gender
                            , race
                        FROM users
                        """
                    )
                    return [
                        self.record_to_account_out(record)
                        for record in result
                    ]
        except Exception as e:
            print(e)
            return {"message": "Could not get all vacations!!"}

    def get_one(self, id: int) -> Optional[AccountOutWithPassword]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT id
                            , first
                            , last
                            , hashed_password
                            , email
                            , age
                            , gender
                            , race
                        FROM users
                        WHERE id = %s
                        """,
                        [id]
                    )
                    record = result.fetchone()
                    print("record found", record)
                    if record is None:
                        return None
                    return self.record_to_account_out(record)
        except Exception as e:
            print(e)
            return {"message": "Could not get that account!!"}
