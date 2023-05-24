## May 16, 2023 (T)

What I accomplished today:
* Created a development journal
* Pulled from main to get finished docker-compose.yaml file and the migration tables
* Created endpoints for getting (GET) and creating (POST) users

## May 17, 2023 (W)

What I accomplished today:
* Nicole and I set up the authorization portion for our project.
* We can create accounts, login, and logout on our back end on localhost:8000 now

We followed the jwtdown-fastapi library/document and the exploration example videos in which Curtis gave a tutorial on authorization. We ran into trouble towards the end when we kept getting an AttributeError in our terminal that our dictionary had no attribute of hashed_password. With the help of a couple SEIRs, we found that our problem was that account_dict needed to be an object but was instead a dict. Because of that, it affected the way we accessed it (attributes - objects; keys/values - dict).

## May 18, 2023 (Tr)

What I accomplished today:
* Added the final endpoint for accounts - backend now finished! (I think?)
* I started the login form, I plan to finish that over the 3 day weekend, as well as start the logout form
    * Added the login form to App.js and Nav.js


## May 20, 2023 (Sa)
What I accomplished today:
* Continued working on LoginForm.js
    * added useNavigate to navigate to main page upon clicking login button
* Was still getting unprocessable entity when logging in

## May 21, 2023 (Su)
What I accomplished today:
* "Finished" my SignupForm.js but had the same issue with the LoginForm.js, getting "Unprocessable entity" when clicking login and sign up

## May 22, 2023 (M)
What I accomplished today:
* Created a GET method that gets the access token and account details of a LOGGED IN user/account
* Spent the entire day trying to get frontend auth to work but to no success

To create that GET method, I looked into the jwtdown-fastapi/react library to see what each function was doing.
For frontend auth, my team and I read through the authentication-playground repository but are still stuck. We were getting 3 errors in our browser console.


## May 23, 2023 (T)

What I accomplished today:


## May 24, 2023 (W)

What I accomplished today:


## May 25, 2023 (Tr)

What I accomplished today:
