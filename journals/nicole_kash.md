The date of the entry
A list of features/issues that you worked on and who you worked with, if applicable
A reflection on any design conversations that you had
At least one ah-ha! moment that you had during your coding, however small

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
