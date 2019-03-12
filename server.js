const express = require('express')
const app = express()
const bodyParser = require('body-parser')
require('dotenv').load()

const port = process.env.PORT || 5000
const cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

let routes = require('./api/routes') //importing route
routes(app)

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
})


const NodeCouchDb = require('node-couchdb');
const couch = new NodeCouchDb({
    host: 'vote.bytesoft.net',
    protocol: 'http',
    port: 5984
    // auth: {
    //     user: 'admin',
    //     pass: 'bnet2019@79'
    // }



});
 couch.listDatabases().then(function(dbs){  
console.log(dbs);  
});  


app.listen(port)

console.log('RESTful API server started on: ' + port)