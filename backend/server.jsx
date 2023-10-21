const express = require("express");
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"signup"
})

app.post('/signup', (req, res) => {
    const sql = "INSERT INTO login ('username', 'password', 'passwordauthentification', 'email') VALUES (?)"
    const value =[
        req.body.username,
        req.body.password,
        req.body.passwordauthentification,
        req.body.email
    ]
    db.query(sql, [value], (err, data) => {
        if(err){
            return res.json("Error")
        }
        return res.json(data);
    })
})

app.listen(8081, ()=> {
    console.log("listenning...")
})
