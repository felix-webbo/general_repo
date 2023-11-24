const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bcrypt = require('bcrypt');
const salt = 10;

const app = express();
 
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "sql12.freesqldatabase.com",
    user: "sql12650835",
    password: "FvcFJRH8er",
    database: "sql12650835",
    multipleStatements: true
});
db.connect((err)=>{
    if(!err){
        console.log('Connected to the server');
    }
    else{console.log('Connection failed\n', err);}
});

app.post('/Register', (req, res) => {
    
    const sql = 'INSERT INTO fields (`fname`, `lname`, `user`, `email`, `pwd`) VALUES (?)';
    bcrypt.hash(req.body.pwd.toString(), salt, (err, hash) => {
        if(err) return res.json({Error: 'Error for hashing password'});
        const values = [
            req.body.fname,
            req.body.lname,
            req.body.user,
            req.body.email,
            req.body.pwd
        ]
        db.query(sql, [values], (err, result) => {
            if(err) return res.json({Error: 'Error while inserting data in the server'});
            return res.json({status: 'Success'})
        })
    })
    
})

app.listen(5001, ()=>{
    console.log('Listening....');
})