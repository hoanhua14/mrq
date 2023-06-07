## June 6, 2023
Today, I worked on:

* Today I continued working on the README file. The team made some group decisions about styling as well. We are done with the MVP. I also clicked through the website and found small bugs. We spent today fixing them.

We are almost done!


## June 5, 2023
Today, I worked on:

* Over the weekend I worked on resolving a CORS error in the deployed front end. I was able to solve this quite quickly with the solution below and then redeploy the back end. The errors went away and everything is functioning normally in the deployed front end now. Today I worked on assisting my teammates with Git merge requests. I assisted Bran with why is pipeline was failing. He had an unresolved merge conflict and "<<<<HEAD" had been inserted into his file. I had him share his screen and helped him locate the unresolved merge conflict. I assisted SoHoan with the steps of how to get her dev branch up to date with main before making a merge request. I also spent a lot of time preparing the README file.

I checked the CORS error in the console and realized the get request was coming from https://mrq1.gitlab.io but we had set the CORS host in the back end deployment to https://mrq.gitlab.io . I deleted the back end deployment and redeployed with the correct CORS host. This resolved the issue.

## June 2, 2023
Today, I worked on:

* I spend a lot of time on deploying the database, back end service, and finally the frontend. I did run into a module not found error while trying to deploy the back end service. I did eventually solve this problem with the solution below. We managed to deploy the database, back end, and front end but did not have time to test the front end.  

I was confused as to why the development environment was working but the backend deploy was having a module not found error. I realized I did not copy over all of the top level files for the MRQ service into its Dockerfile. Once I copied them all over, the module not found error went away.



## June 1, 2023
Today, I worked on:

* I changed the code in Dockerfile, docker-compose.yml, main.py, and gitlab-ci.yml to prepare for deployment. I added a root route to Main.py that returns a success message. I then changed the ports from 8000 to 80 in both the Dockerfile and docker-compose-yml in regards to the MRQ service. Lastly, I added a build script to gitlab-ci.yml to create a docker container that can be deployed in Galvanize cloud. I did have my lint test fail for the MRQ service and had to spend a bit of time fixing a lot of files. After fixing this, we completed the merge request and saw the container in the gitlab registry.

I realized we as a group should run black before making any further merge requests to avoid lint test failures. 

## May 31, 2023
Today, I worked on:

* I set up the unit tests folder, installed pytest created our first unit
test (get all exercise), and cleaned up any unused React variables to
prepare for deployment.

I realized I needed to make a mock user for my unit test because the
endpoint to get all exercise is protected. At first, I made the unit
test without this and recieved a 401 error which prompted me to set
up the mock user in the test.


## May 30, 2023
Today, I worked on:

* Making sure if a user inputs the wrong credentials that the user
is prompted to try to input their information again. The user should
not be redirected to the dashboard unless their login is successful.

I added a useState to check if there has been a login attempt. I
then checked if there was a login attempt and no token. If so,
the user will be prompted to retry the login. If there is a token,
then the user will be redirected to the dashboard. I realized I can
add a paragraph in the form after the submit button that checks if
there has been a login attempt and display the prompt under the
button when needed.

## May 25, 2023
Today, I worked on:

* A populating the data for the dashboard including a sum of
all of today's water entries, all of today's exercise entries,
and all of yesterday's sleep entries to give an overview on
the day.

I created a new router called dashboard.py with the goal of
getting the three numbers needed for the dashboard. In order
to make this happen, I created a file called
dashboard_by_date_handler.py. This file is a middleman between
the dashboard and the exercise, sleep, and water
queries. The handler can get the needed data from all three
tables, filter the data, and return it the needed data with just one API call.

I decided that filtering all of the entries and then
finding a sum all in the frontend is not the best
long term solution. Once there is a lot of data, this will slow
down our page. Instead, I needed another backend
point that pulls from the exercise table, sleep table, and
water table, adds everything up, and then just returns
the three numbers needed to populate the dashboard. I
also needed a handler with a constructor. I looked backed
on my python pratice problems from module 1 to assist
me with creating a constructor.

## May 24, 2023
Today, I worked on:

* A banner with a button for the MainPage.js

I used a Tailwind banner component as a base and
created a banner for the homepage with a button
that directs the user to create an account. SoHoan
created the image yesterday and I hosted the banner's
background image on Imgur so I can use the link.

I remembered I can import Link from react-router-dom
to easy make the button clickable and simplfy the
redirect.


## May 23, 2023
Today, I worked on:

* Front end auth
* Ability to log in and get a token
* Worked on creating a form to log exercise entries
* Worked on creating a list view for exercise entries
* Worked on delete functionality for list items



I worked with David to complete the frontend auth and
were able to solve the CORS error by adding to the
if statement in the accounts router to check for
an account. The problem was that our GET for
tokens was programmed to attempted to get a token
even if there was nobody logged in.

After solving this error, I adapted my exercise form
and list view to use the token for GET and POST requests.
My list and form are functioning with no errors. I was able
to implement delete in the frontend as well for the exercise
list items.



## May 22, 2023
Today, I worked on:

* Front end auth
* Ability to log in and get a token
* Worked on creating a form to log exercise entries
* Worked on creating a list view for exercise entries

I worked with David to complete the frontend auth and
started to take a look at Tailwind to create my form
and list views. I was able to create a shell of a
form which my teammates were able to use for their
forms.


David and I were stuck on a CORS error in the front
end when visiting the home page when not logged in.
 We decided to leave it for the night. I did make
quite a bit of progress and was able to make my
dropdown list work for my form.


## May 18, 2023
Today, I worked on:

* Backend authorization
* Log in, log out, and create an account at localhost:8000/docs

I worked with David to complete the backend auth. We followed
the documentation and managed to complete the task in 3 hours.


We debugged an error regarding an attribute error and found
out we were trying to access and object with a key and value
when we needed to use dot notation. After discussing with the
SEIR Marty, we changed our "account_dict" object into a dictionary
as this is best practice as per the jwtdown-fastapi documentation.


## May 17, 2023

Today, I worked on:

* Protected endpoints for exercise.

I completeted the protected endpoints to POST,
DELETE, as well as GET all exercise for a specific
user. Users can only view and manipulate their own
data and users must be logged in.


In order the achieve the above, I had to add an extra
parameter, user_id to the querie. I realized I could
grab the logged in user's id using account_data, which
is used to protect endpoints in the router. I pulled out
the id in the router function and sent it through as a
parameter in the querie function in order to get the
functionality I need. Now, users must be logged in and
only have access to their own data.

## May 16, 2023

Today, I worked on:

* Backend auth with David

David and I finished up the backend auth including
creating an account, JWT token creation, logging in,
and logging out. The entire team is now set up to
be able to create protected endpoints.

Today, I figured out the importance of viewing source
code and documentation when I am stuck. Using these tools
helped David and I problem solve.

## May 15, 2023

Today, I worked on:

* Creating tables and setting up migrations

I worked with Bran on setting up the database tables
and setting up migrations to run automatically. We
had to make changes in the migration files and docker
files. We finalized the design of the tables with the
entire team.

Today, database table creation became more clear to me.
I was able to add entries to the database via Beekeeper.
Beekeeper's error messages helped me better understand
when I was using the wrong syntax.
