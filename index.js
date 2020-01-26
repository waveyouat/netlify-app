const express = require('express');

const app = express();

app.get("/", ()=>console.log('Req received'));

app.listen(port,()=>{console.log("App listening on port " + port)});