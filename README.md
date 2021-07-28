# driverfury's blog

## Description

A simple blog written using VueJS and ExpressJS. You can access a [live demo](http://driverfury.altervista.org)
hosted on my website (it uses fake API since it is only for demonstration purposes).

## Project setup
```
npm install
```

### Backend
The backend is written in JS (you can find it in ```src/server/``` folder) and it uses [expressjs](https://expressjs.com/) and [sqlite3](https://www.npmjs.com/package/sqlite3).

First thing, you need to start the server with the following command:

```
npm run startServer
```

By default it starts a listening server on port ```8000```.

If you want to change the port just edit line 9 of ```src/server/server.js``` file.
Then go to ```src/store/index.js``` and edit line 5.

When the server is started it will automatically create an SQLite database and all the
tables needed. Plus, it will add some dummy content.

### Frontend
The frontend is written in HTML, CSS, JS using [VueJS v3](https://vuejs.org/) framework.

You can serve it for testing or compile and minify it for production.

To serve it, launch the following command:
```
npm run serve
```

To compile it for production, instead, launch the following command:
```
npm run build
```

When you build for production the ```dist``` folder will be created and you can host it wherever you want.

### Quickstart

Once you started the server (backend) and served/built the frontend, you can check the blog
by visiting the web address on which the frontend is hosted, when you serve the address usually is
```http://localhost:8080```.

You can read posts or you can create new ones.

To create a post you need to log in ad administrator. Go to ```/login``` page and type
the default credentials for the admin:
```
username: admin
password: admin123
```

![Login](/screenshots/001.png?raw=true "Login")

Then you need to click on "Create a new post" a start writing:
![New post](/screenshots/002.png?raw=true "New post")

When you have finished, click on "Create Post". You will be redirected to the home page
where you can see the preview of your newly created post.
![New post preview](/screenshots/003.png?raw=true "New post preview")

Finally, clicking on it will show the full body of the post:
![New post full](/screenshots/004.png?raw=true "New post full")
