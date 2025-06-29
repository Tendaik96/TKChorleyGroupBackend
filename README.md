# TKChorleyGroupBackend
Backend
create folders,
for data - store data in json format
routes folder and models (what do you want to happen to the data)
npm init FIRST

#### Ensure all these packages have been installed

            - Express.js (npm i express)
            - Nodemon (npm i nodemon --save-dev)

in package .json make sure  scripts section you have a dev section you have ` "dev": "nodemon app.js",`and add 

`{
  // ...
  "type": "module",
  // ...
}` when importing ECMAScript
            
            https://stackoverflow.com/questions/58211880/uncaught-syntaxerror-cannot-use-import-statement-outside-a-module-when-import

to run terminal `npm run dev`

create model function, make sure you are readng jaon fil an retrieving data.
call the function and see if data is being read or error message is being thrown

create .gitignore and add nodemodules so that this is not pushed to github when you're submitting your code

create router
import model
import router to app.js
test endpoitnt with postman
`localhost:3000/api/category`