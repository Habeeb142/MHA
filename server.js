//making express available::::::::::::::::::::::::::::::::::::::::::::::::
var express = require('express');
const server = express();
var request = require('request');
var path = require("path");
//connecting to locahost::::::::::::::::::::::::::::::::::::::::::::::::::
const port = server.listen(process.env.PORT || 3000, ()=>{
    console.log("app is listening to port sir!");
});

//developing url::::::::::::::::::::::::::::::::::::::::::::::::::::::::
let url = 'https://ravesandboxapi.flutterwave.com/v2/kyc/bvn/';
let secret_key = 'FLWSECK-7e256e58ed1b03574a5fdc7205ed2b0f-X';

//below codes are for bvn app::::::::::::::::::::::::::::::::::::::::::::

//setting engine to ejs::::::::::::::::::::::::::::::::::::::::::::::::::
server.set('view engine', 'ejs');

//requiring formidable and fs::::::::::::::::::::::::::::::::::::::::::::
var fm = require('formidable');
var fs = require('fs');

//creating a method from formidable class::::::::::::::::::::::::::::::
var form = new fm.IncomingForm();

//middlewares:::
server.use(express.static(__dirname+'/public'));

//requiring body-parser::::::::::::::::::::::::::::::::::::::::::::::::::::
var bodyParser = require('body-parser');
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended:true}));

//bvn_index::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
server.get('/bvn', (req,res)=>{
    res.render('index_bvn');
});
server.get('/process', (req,res)=>{
    res.render('process', { bvn_num: null, status: null })
});
server.post('/validate', (req, res)=>{
    let bvn_input = req.body.bvn_num;
    if(bvn_input==''){
        res.render('process', {status: 'fillform_err', bvn_num: null});
    }
    else{
    
    let dat = url + bvn_input +'?seckey='+secret_key;
    request(dat, function(err, response, body){
        if(err) {
            res.send('Error: connection failed');
        }

        else {
            let mine = JSON.parse(body);
            console.log(mine);
            res.render('result', {bvn: mine.data.bvn, fn: mine.data.first_name, mn: mine.data.middle_name, ln: mine.data.last_name, dob: mine.data.date_of_birth, phone: mine.data.phone_number});
        };
    });
    }
});
//end of bvn app:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// Serve static files....
server.use(express.static(__dirname + '/dist/weather-app'));

// Send all requests to index.html for mustaphahabeeb.herokuapp.com::::::::::::
server.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/weather-app/index.html'));
});





