//Including the Express Package
var express = require ('express');

var bodyParser = require('body-parser');

var favicon=require('serve-favicon');
var app = express();

var port = process.env.PORT || 1339;

app.set('view engine','jade');

app.set('views',__dirname + '/views');

app.use('/content',express.static(__dirname+'/public'));
app.use('/content',favicon(__dirname+'/public/favicon.ico'));
app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());

app.get('/content/:viewname',function(req,res){
res.render(req.params.viewname);
});

app.listen(port,function(){console.log('Running on port '+port)});
