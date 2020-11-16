require('dotenv').config();
const massive = require('massive');
const express = require('express')
const session = require('express-session')
const app = express();
app.use(express.json());


const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;

app.use(session(
    {
        resave: false,
        saveUninitialized: true,
        secret: SESSION_SECRET,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24
        }
    }
));


const ctrl = require('./controller.js')

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then( db => {
    app.set('db', db);
    console.log('Connected to database')
}).catch(err => console.log(err));

app.post('/auth/register', ctrl.register);
app.post('/auth/login', ctrl.login);

app.get('api/getposts/:id', ctrl.getPosts)

app.listen(SERVER_PORT, ()=> {console.log(`server listening on port ${SERVER_PORT}`)})