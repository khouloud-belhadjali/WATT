const { application } = require('express');
const bodyParser = require('body-parser')
const express = require('express');
const app = express();
const mysql= require('mysql2')
const cors = require('cors')
const db =mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'WATTDataBase'
    }
);
app.use(cors())
app.use(express.json()) //needed to request somthing from the frontend
//app.use(bodyParser.urlencoded({extended: true}))

app.post('/register',(req,res)=>{
    const userName = req.body.userName
    const email = req.body.email
    const password = req.body.password
    const sqlInsert= "INSERT INTO register (userName, email, password) VALUES (?,?,?)"
    db.query(sqlInsert,[userName, email, password], (err, result)=>{
        console.log(result)
    })
});
app.post("/login", (req, res) => {
    const userName = req.body.userName;
    const password = req.body.password;
    db.query("SELECT * FROM register WHERE userName = ? AND password = ?", [userName, password], 
        (err, result) => {
            if(err){
                req.setEncoding({err: err});
            }else{
                if(result.length > 0){
                    res.send(result);
                }else{
                    res.send({message: "WRONG USERNAME OR PASSWORD!"})
                }
            }
        }
    )
})


app.listen(3001, ()=>{
    console.log('running')
})