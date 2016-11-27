var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors');


var index = require('./routes/index');
var todos = require('./routes/todos');

var app = express();

var port = 1337;

app.use(cors());


//View Engine, möjliggör för express att visa templates
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/', index);
app.use('/api/v1/', todos);

app.listen(port, function(){
    console.log('started server on port ' + port);
});