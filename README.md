# Move. Rest. Quench. (MRQ)

Team:

- Nicole Kash
- SoHoan Hua
- Bran Tai
- David Hong

## Wireframe
(Insert screenshot here)

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
- Users can access their personalized dashboard displaying daily goals provided by MRQ based on general recommendations for daily sleep, water, and exercise via the "Dashboard" button on the navigation bar.
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
(insert water table here)

## GHI (Graphical Human Interface)
### Home Page
This is the first page users will see when they visit the website.
(Insert screenshot)
### Dashboard
The dashboard is personalized to the user and displays progress toward the exercise, water, and sleep goals. There is a chart for the three categories so users can see today's progress at a glance.
(Insert screenshot)
### Exercise List
The exercise list is personalized to the user and lists all of their exercise entries for all dates. A user is able to delete entries from this view.
(Insert screenshot)
### Sleep List
The sleep list is personalized to the user and lists all of their sleep entries for all dates. A user is able to delete entries from this view.
(Insert screenshot)
### Water List
The water list is personalized to the user and lists all of their water entries for all dates. A user is able to delete entries from this view.
(Insert screenshot)
### Resources page
Some info about resources page
(Insert screenshot)
### About us page
Some info about About us page
(Insert screenshot)
### Features Page
Some info about features page
(Insert screenshot)



## FastAPI Endpoints

### Auth/Users
(Insert JSON here)

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
(insert JSON here)

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
