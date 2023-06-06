## Week 17, tuesday 6/6

## Week 17, monday 6/5
- today i restyled the about us page (changed the background)
- restyled the feature page background
- worked on sleep calculator: i would need to create a state to keep track of the user's input of the time they go to bed, do some manipulations to calculate wake up time and display on the page.
## Week 16, saturday sunday 6/3 6/4
- this weekend, I created a form for user to set goals for sleep, exercise, and water. At first, I wanted to have goals set in "/goals" and create a custom hook to change the state of goals in dashboard without having to save it back to database. However, after having writen the custom hook useGoal, I realize that whenever i navigate to another page, all goals would be reset. After reconsidering some aspects, I think it would make more sense to have goals saved to database after the user sets it and subsequently, states in the dashboard would be updated to the newly set value as well. Based on how the database is currently set, I think it will work by adding a goal field in each of the category.
## Week 16, friday 6/2
-today we were able to deploy database, backend, and frontend. We did have some troubles identifying the right thing to put in the command but everything works eventually. I was hopping in and out during the process because I was also working on making my unit test that is a bit diffrent than what was in the lecture. We got the front end deployed but upon testing the functionality, there are errors in the console when i tried signing up and log in. planning to work on that on monday when we get back.

## Week 16, thursday 6/1
-today our team started working on deployment while one of us took care of having some charts showed up on the dashboard. The process were not too bad but we did run into an issue: after having the database deployed, we tried to deploy the image but then the database deployment does not show up when running the list command.
- As for me, I got the problem from yesterday resolved using Rosheen's guidance on hmu, had to install and run a couple more commands and i got the token working.

## Week 16, wednesday 5/31
- finished styling log in and sign up form
- today I tried writing a unit test for a protected endpoints using a fake id of a fake account. I got a 422 error unprocessible entity.
- Went over the materials for CD. I couldn't get the token to show up and when i tried logging in, got an error saying no directory.
- added a few things on signup and login form styling.

## Week 16, tuesday 5/30
- today i finished styling 3 create and list forms of all categories. I ran into an issue which I thought would be css-related but turned out I was passing in the wrong object.
- styled the greeting and started on sleep stretch goals




## Week 15, wednesday 5/24
- Pulled and merged front end auth
- worked on fixing errors after merging

## Week 15, tuesday 5/23
- Today I finished and styled the nav bar .
- Styled my category page

## Week 15, Monday 5/22
- Today I finished the form for my category for a user to input the data which is hooked to states in the front end to check whether or not an instance is actually created in the database.
- I also read some docs to apply redux to this project.
- Did some styling using tailwind in SleepForm.js
## Week 14, Thursday 5/18
- Today I finished 3 protected endpoints for a logged in user to create, delete and view all sleep records.
- To do that, I created routers/sleep.py, queries/sleep.py, and registered it in main.py
- Tested all endpoints working in http://localhost:8000/docs#
- Ahhh I'm so stupid moment:
+ got an error saying unprintable cause i was using , for a key value pair in a dict
+ learned to pay attention to the cursor and where it ends to make correct indentations.



## Week 14, Wednesday 5/17
- Tested tailwind
- Deleted pre-setup mainpage and replaced with official MainPage.js with a testing component.
- Started working on protected endpoints for my feature.


## Week 14, Monday 5/15
Today, my team:
- worked on setting up the database, fastAPI, and react application.
- created tables for users, categories (sleep, exercise, water), during this process, we refined the models.
- set up beekeeper and tested connections.
- went over git process as a group.


## Week 14, Tuesday 5/16
Today, my team:
- pulled, synced, and tested our local version.
- worked on users' auth.
Today, I:
- went over tailwind docs
- installed and tested tailwind
