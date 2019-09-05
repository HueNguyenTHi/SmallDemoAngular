// const express = require('express')
// const app = express()
// app.listen(8000, () => {
//     console.log('Server started!')
// })

var path = require('path');
var express = require('express');
var serveStatic = require('serve-static');
var app = express();
const cors = require('cors')
var corsOptions = {
    // origin: 'http://localhost',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}
var userList = [];
app.use(cors(corsOptions))

app.use(serveStatic(path.join(__dirname, 'public')));

app.listen(3000, function () {
    console.log('Node server running @ http://localhost:3000')
});

app.get('/', function (req, res) {
    res.redirect('/public/index.html');
});


app.route('/user').get(function (req, res) {
    res.send(userList);
});


const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.route('/user').post(function (req, res) {
    let idValue = 0;
    if (userList.length != 0){
        idValue = userList[userList.length -1].id +1;
    }
    var tempuser = {id: idValue, name: req.body.name, color: req.body.color};
    userList.push(tempuser);
    res.send(201, req.body)
});

app.route('/user/:userId').delete((req, res) => {
    userList = userList.filter(function(user) {
        return user.id != req.params.userId;
    });
    res.sendStatus(204)
  })