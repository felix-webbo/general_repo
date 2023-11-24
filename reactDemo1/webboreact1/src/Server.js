const express = require("express");
const http = require("http");
const fs = require('fs');



const app = express();
const server = http.createServer(app);

app.set('port', process.env.PORT || 3000);

app.get('/contact', (req, res)=>{

})

server.listen(app.get('port'), ()=>{
    console.log('The Server is running......');
});