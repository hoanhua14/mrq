The date of the entry
A list of features/issues that you worked on and who you worked with, if applicable
A reflection on any design conversations that you had
At least one ah-ha! moment that you had during your coding, however small

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
