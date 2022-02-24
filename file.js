let app = require('express')();
let http = require('http').Server(app);


app.get('/', function(req, res){
    res.status(200).send({
        message: 'Welcome to the API',
        status: 200,
        data: null,
        error: null
    })
});

const host = '0.0.0.0'
const port = 3000

http.listen(port, host,function(){
    console.log(`listening on ${host}:${port}`);
});