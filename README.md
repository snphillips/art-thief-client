# Art Thief

View Art Thief here: https://art-thief.surge.sh/

## Project Description
_"Good artists copy; great artists steal."_ 

I don't know about that, but I do know a good way to dislodge a creative block is to inspired by the work of the great artists, designers and creators that have come before us. 

_Art Thief_ allows users to view random images from the Cooper Hewitt Museum's collection, based on selected keywords such as angular, art deco, modernism etc. 

_Art Thief_ is a project to experiment with the Cooper Hewitt Museum's wonderful API.
https://collection.cooperhewitt.org/api/

The server (back end) is Node/Express. 

The client (front end) is React.

<img src="https://i.imgur.com/O3KKdaX.png" width="450" alt="screengrab of app">
<img src="https://i.imgur.com/NRybiUm.png" width="450" alt="screengrab of app">
<img src="https://i.imgur.com/n8tJRAN.png" width="450" alt="screengrab of app">
<img src="https://i.imgur.com/2R8VULw.png" width="250" alt="screengrab of app mobile view">
<img src="https://i.imgur.com/bj13WpG.png" width="250" alt="screengrab of app mobile view">
<img src="https://i.imgur.com/qBkmOSD.png" width="250" alt="screengrab of app mobile view">


## Geetting Started

1) Get an API access token from the Cooper Hewitt Museum. 

Copy this token and save it for later. Give it delete access: https://collection.cooperhewitt.org/api/oauth2/authenticate/like-magic/

2) Clone the repo

`git clone https://github.com/snphillips/art-thief.git`

3) Get into the correct directory

`cd art-thief `

4) Install the dependencies for the node server

` npm install `


5) Create a .env file where you will keep your API access token

`touch .env`

6) Paste the following into your .env file but reaplace YOUR ACCESS TOKEN with the Cooper Hewitt Museum token you saved from step 1). Remember to put the token in quotes as it's a string.

`COOPER_API_TOKEN='YOUR ACCESS TOKEN'`

note: you'll notice that the `.env` is listed in the .gitignore. This is to keep your access token safe from prying eyes.

7) get the node server running

`npm run dev` 

Open a browser to http://localhost:8888/

You should see a mostly white scren with the phrase: _Hello world, let's steal some art._

_(TODO insert instructions about how to swictch between development and production)_

Now check to see if you can hit the Cooper Hewitt Museum's API by pasting the following into your browser: http://localhost:8888/searchbytag/memphis

You should see a json object listing information about the museum's collection with the keyword memphis. Yay!

(TODO: describe reason for Redis error and how to get around it)

8) Now let's get the React client working. Start by getting into the right directory:

 ` cd client`
 
9) Get the dependencie for the React client
 
 ` npm install `
 
10) Start the React server
 
 `npm start`
 
11) Open a browser to http://localhost:3000/  Yay!
 



## Built With
- node/express (server)
- react (client)
- axios for API calls
- Cooper Hewitt Museum API
- redis to cache results for quick retrieval
- server hosted on Heroku
- client hosted on Surge
