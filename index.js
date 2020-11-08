const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const app = express();
const dotenv = require('dotenv');
const port = 5000;


const taskRouter = require('./routes/taskRouters');
dotenv.config({ path: '/config.env' });

const db = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: '12345678',
    database: 'task',
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});

global.db = db;

app.set('port', process.env.port || port);
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client
app.use(express.static(path.join(__dirname, 'public'))); // configure express to use public folder
app.use(fileUpload()); // configure fileupload


app.use('/tasks', taskRouter);


app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
