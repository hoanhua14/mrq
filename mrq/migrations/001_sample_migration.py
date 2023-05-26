steps = [
    [
        # "Up" SQL statement
        """
        CREATE TABLE users (
            id SERIAL PRIMARY KEY NOT NULL UNIQUE,
            first VARCHAR(250) NOT NULL,
            last VARCHAR(250) NOT NULL,
            hashed_password VARCHAR(250) NOT NULL,
            email VARCHAR(250) NOT NULL UNIQUE,
            age SMALLINT NOT NULL,
            gender TEXT NOT NULL check(gender = 'Male' or gender = 'Female' or gender = 'None of the above' or gender = 'Do not want to share'),
            race TEXT NOT NULL check(race = 'Asian' or race = 'White' or race = 'Black or African American' or race = 'Hispanic' or race = 'American Indian or Alaskan Native' or race = 'Native Hawaiian or other Pacific Islander' or race = 'Other')

        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE users;
        """,
    ],
    [
        # "Up" SQL statement
        """
        CREATE TABLE exercise (
            id SERIAL PRIMARY KEY NOT NULL UNIQUE,
            user_id INTEGER NOT NULL REFERENCES users("id") ON DELETE CASCADE,
            minutes SMALLINT NOT NULL,
            date DATE NOT NULL,
            category TEXT NOT NULL check(category = 'Run' or category = 'Swim' or category = 'Walk')
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE exercise;
        """
    ],
    [
    # "Up" SQL statement
        """
        CREATE TABLE sleep (
            id SERIAL PRIMARY KEY NOT NULL UNIQUE,
            user_id INTEGER NOT NULL REFERENCES users("id") ON DELETE CASCADE,
            hours SMALLINT NOT NULL,
            date DATE NOT NULL,
            quality INTEGER NOT NULL check(quality = 1 or quality = 2 or quality = 3 or quality = 4 or quality = 5)
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE sleep;
        """
    ],
    [
    # "Up" SQL statement
        """
        CREATE TABLE water (
            id SERIAL PRIMARY KEY NOT NULL UNIQUE,
            user_id INTEGER NOT NULL REFERENCES users("id") ON DELETE CASCADE,
            ounces SMALLINT NOT NULL,
            date DATE NOT NULL
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE water;
        """
    ],
]
