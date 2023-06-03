## May 16, 2023 (T)

What I accomplished today:
* Created a development journal
* Pulled from main to get finished docker-compose.yaml file and the migration tables

As a group, we formulated our migrations table and came up with a total of 4 tables: accounts, exercise, sleep, and water. The idea is that each account has its own exercise, sleep, and water logs and they need to be unique to that account. So, each account that has its own id, has its own exercise, sleep, and water logs which can be traced back to that account because we put a user_id value of that account into each table.


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

The login form itself isn't a long form, but I wasn't sure how to incorporate the auth for it, so for now I just set up the backbone of what it should look like. Instead of logging in with a username, we made it so that we login using an email, which is a bit different than the examples that the instructors showed us.

## May 20, 2023 (Sa)
What I accomplished today:
* Continued working on LoginForm.js
    * added useNavigate to navigate to main page upon clicking login button

I was pretty stuck today as I was Was getting an unprocessable entity console error when logging in.


## May 21, 2023 (Su)
What I accomplished today:
* Started to work on the SignUpForm.js

I started working on the SignUpForm.js today which is more exhaustive than the LoginForm since there's a lot more information for a user to fill out in order to create an account. I was getting the same problem as I was in the LoginForm.js as in the browser console would throw me an unprocessable entity error and I could not figure out why. On a positive note, on our dropdown for race and gender, I can see all the options we put in our account migration table.


## May 22, 2023 (M)
What I accomplished today:
* Created a GET method that gets the access token and account details of a LOGGED IN user/account
* Spent the entire day trying to get frontend auth to work but to no success

To create that GET method, I looked into the jwtdown-fastapi/react library to see what each function was doing.
For frontend auth, my team and I read through the authentication-playground repository but are still stuck. We were getting 3 errors in our browser console.


## May 23, 2023 (T)

What I accomplished today:
* We fixed the errors in the LoginForm.js
    * Able to get a cookie upon logging in on the react frontend

Turns out I forgot to add "if account" in the get token function in my routers.py, which was throwing CORS errors in our react app.


## May 25, 2023 (Tr)

What I accomplished today:
* Completed the sign up form, users are able to sign up on the front end and get a token
* Added a logout button functionality and it appears when you login
    * the login and sign up buttons disappear upon logging in

With help from the SEIRs and Nicole, in the handleSignUp, we added a username:email while still having a email: email pair. We added that just so that the info was available to grab and it would not affect our database.
For the logout functionality, I created a useUser.py form that James demonstrated earlier in the week and implemented that in our Nav.js. The idea of putting that there makes it so the login and sign up buttons disappear upon logging in or signing up. The only problem I'm having at the moment is when I click logout, the account in fact does logout, but the Navbar doesn't update so that the login and signup buttons reappear.

## May 26, 2023 (F)

What I accomplished today:
* Started working on the about us page section

Got most of it done, just need further format the background correctly so that the page fills. I also need to add GitLab and LinkedIn profile links for each of our members. For the page, I used a template to get inspiration from and then I formatted it differently because I wanted it to look the way we have it instead of the template's version.

## May 30, 2023 (T)

What I accomplished today:
* Finished up the about us page section
* Added another logout functionality to navigate to the mainpage after clicking it
* Started working on password matching validation on the sign up form


The background image still needs to formatted a bit better but overall it's good as it is for now.
I also started working on the password matching validation on the sign up form. It required me to install some npm packages but I read on stack overflow somewhere about this person did some npm installs for something else and their project broke. That made me a bit paranoid so I just pulled from the latest commit so that I wouldn't have those installed dependencies in my package.json just in case and started from scratch. I looked more online and saw that there's no need to install anything extra for password matching validation. I just an if statement and a couple more state variables and incorporated it into the return.


## May 31, 2023 (W)

What I accomplished today:
* Made small changes to the nav bar
* Made changes to the About Us page


When logged in, there's some visual spacing between the greeting and resources button. I also made it so that a button to the dashboard appears when a user is logged in. I wasn't satisfied with how our About Us page looked, so I decided to change it a bit to make it fit my liking a bit more. Admittedly, CSS is a really weak point in my skills so it was really challenging. I'm still not 100% satisfied with how it looks, but it's a lot better than what it was yesterday. I plan to continue fine tune it as we approach the deadline next week.


## June 1, 2023 (Tr)

What I accomplished today:
* Our group started deployment
* Started to work on my unit test

Our group started deployment but couldn't finish it. We ran into an issue when deploying the database as the terminal was throwing an "Unprocessable entity" error. On a positive note, our pipeline passed since we got our build and lints to show up in GitLab. We weren't the only group that was encountering the "Unprocessable entity" error so I think it's some a small hiccup in the deployment platform we're using, considering it's still kind of new.
I started on my unit test later in the evening today. I still wasn't sure about the topic so I had to rewatch lecture and look over my exploration notes to get a better idea. I finished about half of it but my plan is to finish it tomorrow.


## June 2, 2023 (F)

What I accomplished today:
* Completed my unit test
* Fixed formatting of signout and goal buttons and the greeting
* "Completed" project deployment with my group

I completed my unit test. It helped to follow the format that the exploration showed us. It's odd though because mine and Nicole's test pass in the MRQ Docker terminal, but in the terminal itself, they don't pass. I also fixed formatting of the logout and goals buttons when a user is logged in. Instead of the plain old text buttons, I incorporated the button design that So Hoan made for the other forms. So now, those buttons fit the overall theme a lot better now. We noticed Rosheen's reply to Esra's HMU post about the unprocessable entity, and that we should try removing the -m flag in one of the deployment terminal commands. We were able to move onto frontend deployment, which was a lot more straight forward than the backend/database deployment. After going through the steps and finishing frontend deployment, we got our gitlab pages link in our project page on gitlab and are able to view it from there! The only problem, however, is when we try to sign up for an account, we get a plethora of errors such as "Failed to load resource...", "SyntaxError", "Access to fetch at ... CORS policy...", and "TypeError". Although the signup form is an older version of what I have on my local branch right now, it should still be functional considering it's on main in our GitLab repo.

## June 3, 2023 (S)

What I accomplished today:
* I completed the features page to show what our project is about and what visitors should expect to see when they sign up and use our app

To make the features page, I used the About Us page I made as a template with some minor changes to make. I put in placeholder images for now because we're going to replace those images with screenshots of the 3 features of our app (sleep, water, exercise). The purpose of the features page is to give visitors a little sneak peek of what they can expect our app to look like when they use its features.
