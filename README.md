# Move. Rest. Quench. (MRQ)

Team:

- Nicole Kash
- SoHoan Hua
- Bran Tai
- David Hong

## Wireframe

![MRQ Wirefram](image/Wireframe.png "MRQ Wireframe")

## Intended Market
MRQ targets consumers in the fitness and wellbeing market who are looking to track their health related data without emphasis on calories or weight. With a focus on water intake, exercise minutes, and hours of sleep, the consumer can track their health related goals while maintaining a healthy relationship with food.

## How to run MRQ
1. Fork the project at https://gitlab.com/mrq1/move-rest-quench and clone via HTTPS on your machine.
2. CD into the new project directory and run the following commands in your terminal in order:

   - docker volume create postgres-data
   - docker-compose build
   - docker-compose up
3. Make sure all containers are running and allow time for the React server to start.
4. Navigate to the homepage at http://localhost:3000 and click the "Sign Up" button in the navigation bar.

## Functionality
- Users can sign up for an account via the "Get Started" button on the homepage banner or the "Sign Up" button in the navigation bar.
- Users can log out via the "Sign Out" button on the navigation bar.
- Users who already have an account can log in via the "Log In" button on the navigation bar.
- Users can access their personalized dashboard displaying daily goals provided by MRQ based on general recommendations for daily sleep, water, and exercise via the "Goals" button on the navigation bar.
- User's can view a daily overview including three progress charts on their dashboard with a percentage representing their progress toward the exercise, water, and sleep goals. The % on the progress charts represent a sum of exercise entries for today, water entries for today, and sleep entries for last night (yesterday).
- Users can click the "Add a log" button for exercise to record an exercise session. If the session is logged for today, the user will see their progress chart reflect the new entry.
- Users can click the "Add a log" button for water to record water intake. If the session is logged for today, the user will see their progress chart reflect the new entry.
- Users can click the "Add a log" button for sleep to record a sleep session. If the session is logged for last night (yesterday), the user will see their progress chart reflect the new entry.
- Users can click the "Move" link in the dashboard to see a list of all of their exercise entries. They can delete exercise entries from the list.
- Users can click the "Rest" link in the dashboard to see a list of all of their sleep entries. They can delete sleep entries from the list.
- Users can click the "Quench" link in the dashboard to see a list of all of their water entries. They can delete water entries from the list.
- Users can click the "Overview" link in the dashboard to return to today's overview displaying goals and progress charts.


## Data Model - SQL Tables

### User Table
The options for gender include "Male", "Female", "None of the above", or "Do not want to share". \
The options for race include "Asian", "White", "Black or African American", "Hispanic", "American Indian or Alaskan Native", "Native Hawaiian", or "Other".
| name              | Type | Unique| Optional |
| ------------------------- | ------ | -------------------------------------------- | ------- |
| id             | serial    | yes    | no |
| first             | varchar    | no    | no |
| last             | varchar    | no    | no |
| hashed_password             | varchar    | no    | no |
| email             | varchar    | yes    | no |
| age             | smallint    | no    | no |
| gender             | text    | no    | no |
| race             | text    | no    | no |

### Exercise Table
The options for category include "Run", "Swim", or "Walk".
| name              | Type | Unique| Optional |
| ------------------------- | ------ | -------------------------------------------- | ------- |
| id             | serial    | yes    | no |
| user_id             | integer    | no    | no |
| minutes           | smallint    | no    | no |
| date             | date    | no    | no |
| category             | text    | no    | no |

### Sleep Table
(insert sleep table here)

### Water Table
The options for category include "Run", "Swim", or "Walk".
| name              | Type | Unique| Optional |
| ------------------------- | ------ | -------------------------------------------- | ------- |
| id             | serial    | yes    | no |
| user_id             | integer    | no    | no |
| ounces          | smallint    | no    | no |
| date             | date    | no    | no |


## GHI (Graphical Human Interface)
### Home Page
This is the first page users will see when they visit the website.

![Home Page](/image/HOME-PAGE.png "This is the Home Page.")

### Dashboard
The dashboard is personalized to the user and displays progress toward the exercise, water, and sleep goals. There is a chart for the three categories so users can see today's progress at a glance.

![Dashboard Page](/image/DASHBOARD.png "This is the Dashboard page.")

### Exercise List
The exercise list is personalized to the user and lists all of their exercise entries for all dates. A user is able to delete entries from this view.

![Exercise List Page](/image/EXERCISE-LIST.png "This is the Exercise List page.")

### Sleep List
The sleep list is personalized to the user and lists all of their sleep entries for all dates. A user is able to delete entries from this view.

![Sleep List Page](/image/SLEEP-LIST.png "This is the Sleep List page.")

### Water List
The water list is personalized to the user and lists all of their water entries for all dates. A user is able to delete entries from this view.

![Water List Page](/image/WATER-LIST.png "This is the Water List page.")

### Resources page
The resources page provides a comprehensive guide to health management tips that can help improve overall well-being.

![Resources Page](/image/RESOURCES.png "This is the Resources page.")

### About Us page
The About Us page provides an introduction to the website developers who created the web page and their mission to provide health management tips.

![About Us Page](/image/ABOUT-US.png "This is the About Us page.")

### Features Page
The features page provides an overview of the functions and features of the website that can help manage health more effectively.

![Features Page](/image/FEATURES.png "This is the Feastures page.")

### Log In Page
The Log in page allows registered users to sign in and access the features provided on our website.

![Log In Page](/image/LOG-IN.png "This is the Log In page.")

### Sign Up Page
The Sign up page allows new users to register an account and access the health management tools provided on our website.

![Sign Up Page](/image/SIGN-UP.png "This is the Sign Up page.")


## FastAPI Endpoints

### Auth/Users
Galvanize JWTdown for FastAPI and React were used to authenticate the backend and frontend.

| Action            | Method        | Path                  |
| ----------------- | ------------- | --------------------- |
| Login             | POST          | /token                |
| Logout            | DELETE        | /token                |
| Get token         | GET           | /token                |
| Create account    | POST          | /api/accounts         |
| Get all accounts  | GET           | /api/accounts         |
| Get one account   | GET           | /api/accounts/{id}    |

**Create an account:**
On the backend, creating an account requires seven input fields to fill in: first (name), last (name), password, email, age, gender, and race. In addition to the seven inputs (except for password), the output will include the account's access token, that token's type, and a unique id.
**Input:**
```
{
  "first": "George",
  "last": "Washington",
  "password": "GeorgeWashington12345!",
  "email": "George@Washington.com",
  "age": 10000,
  "gender": "Male",
  "race": "White"
}
```
**Output (Status Code 200):**
```
{
  "access_token": "literally_a_unique_token_string_here",
  "token_type": "Bearer",
  "account": {
    "id": 8,
    "first": "George",
    "last": "Washington",
    "email": "George@Washington.com",
    "age": 10000,
    "gender": "Male",
    "race": "White"
  }
}
```

**Login:**
On the backend, logging into an account just requires two inputs fields: username(email) and password. Since the Galvanize JWTdown for FastAPI was used for login, the input field doesn't require manipulating a JSON body.
**Input:**
![Login Page](/image/Backend-Login.png)
**Output (Status Code 200):**
```
{
  "access_token": "literally_a_unique_token_string_here",
  "token_type": "Bearer"
}
```

**Get token:**
To get the token of a logged in user, click "execute" on localhost:8000/docs to get the token of a logged in user. This endpoint is often used to just confirm whether a user is logged in or not. This returns the access token, the token type, account id, first (name), last (name), email, age, gender, and race.
**Output if logged in (Status Code 200):**
```
{
  "access_token": "literally_a_unique_token_string_here",
  "token_type": "Bearer",
  "account": {
    "id": 8,
    "first": "George",
    "last": "Washington",
    "email": "George@Washington.com",
    "age": 10000,
    "gender": "Male",
    "race": "White"
  }
}
```
**Output if logged out (Status Code 200):**
```
null
```

**Logout:**
The logout endpoint was also from the Galvanize JWTdown for FastAPI, making for easy logout functionality for the backend.
**Output (Status Code 200):**
```
true
```

**Get all accounts:**
An endpoint to return all accounts created in the database. This returns everything but the passwords of all accounts.
**Output (Status Code 200):**
```
[
  {
    "id": 7,
    "first": "me",
    "last": "me",
    "email": "me@me.com",
    "age": 0,
    "gender": "Male",
    "race": "Asian"
  },
  {
    "id": 8,
    "first": "George",
    "last": "Washington",
    "email": "George@Washington.com",
    "age": 10000,
    "gender": "Male",
    "race": "White"
  }
]
```

**Get one account:**
An endpoint that returns a specific account by id. On localhost:8000/docs, simply put the id number of an account's details you want to see. This returns everything of a specific account, but the password is a hashed password.
**Output (Status Code 200):**
```
{
  "id": 8,
  "first": "George",
  "last": "Washington",
  "email": "George@Washington.com",
  "age": 10000,
  "gender": "Male",
  "race": "White",
  "hashed_password": "$2b$12$4wx0KKLxyWa54xt2MB4LZuIMea6pgmJGuQzCqBF3xwnZPC9fLqFhW"
}
```


### Move

The endpoints for Move (exercise) are protected. A user must be logged in and a user can only see their own data.
| Action                         | Method | Path                                          |
| ------------------------------ | ------ | -------------------------------------------- |
| List exercise entries             | GET    | /api/exercise    |
| Create exercise entry          | POST   | /api/exercise    |
| Delete a specific exercise entry | DELETE    | /api/exercise/{id}|

**Create an exercise entry:**
Category choices for logging a new exercise entry include "Run", "Swim", or "Walk". In addition to the minutes, date, and category fields from the input, the output will include the id of the new exercise entry in the database and the user id of the currently logged in user.\
**Input:**
```
{
  "minutes": 0,
  "date": "2023-06-05",
  "category": "string"
}
```
**Output: (Status Code 200)**
```
{
  "id": 0,
  "user_id": 0,
  "minutes": 0,
  "date": "2023-06-05",
  "category": "string"
}
```

**List all exercise:**
A list of the currently logged in user's exercise entries will be returned.\
**Output: (Status Code 200)**
```
[
  {
    "id": 0,
    "user_id": 0,
    "minutes": 0,
    "date": "2023-06-05",
    "category": "string"
  }
]
```

**Delete an exercise entry:**
"true" will be returned if the exercise has been succesfully deleted. If you try to delete an exercise that has already been deleted or there is a problem deleting the exercise, "false" will be returned. \
**Output: (Status code 200)***
```
true

```




### Rest
(insert JSON here)

### Quench
The endpoints for Quench (water) are protected. A user must be logged in and a user can only see their own data.
| Action                         | Method | Path                                          |
| ------------------------------ | ------ | -------------------------------------------- |
| List exercise entries             | GET    | /api/water   |
| Create exercise entry          | POST   | /api/water    |
| Delete a specific exercise entry | DELETE    | /api/water/{id}|

**Create a water entry:**
The input includes water intake (ounces) and a date chosen from a calendar for logging in a new entry. The output will include the id of the new water entry in the database and the user id of the currently logged in user.\
**Input:**
```
{
  "ounces": 6,
  "date": "2023-06-07"
}
```
**Output: (Status Code 200)**
```
{
  "id": 13,
  "user_id": 5,
  "ounces": 6,
  "date": "2023-06-07"
}
```

**List all water:**
A list of the currently logged in user's water entries will be returned.\
**Output: (Status Code 200)**
```
[
  {
    "id": 5,
    "user_id": 5,
    "ounces": 13,
    "date": "2023-05-11"
  }
]
```

**Delete a water entry:**
"true" will be returned if the water has been succesfully deleted. If you try to delete a water that has already been deleted or there is a problem deleting the exercise, "false" will be returned. \
**Output: (Status code 200)***
```
true

```

### Dashboard (Daily Overview)
The endpoint for the Dashboard (Daily Overview) is protected. A user must be logged in and a user can only see their own data.
| Action                         | Method | Path                                          |
| ------------------------------ | ------ | -------------------------------------------- |
| Get today's overview             | GET    | /api/dashboard    |

A sum of all exercise minutes for today, a sum of all water ounces for today, and a sum of all of last night's sleep hours (yesterday) will be returned. This summed information gives the user an at a glance overview of their day and easily render's the information needed for the front-end dashboard.\
**Output: (Status code 200)**

```
{
  "exercise": 0,
  "sleep": 0,
  "water": 0
}
```
