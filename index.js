'use strict';
var request = require('request');
const express = require('express')
const cors = require('cors');
var bodyParser = require('body-parser');
const { MongoClient } = require("mongodb");
const util = require("util");
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.use(cors());



app.post('/login', (req, res) => {
  console.log(req.body);
  connect(req.body);
})



var url = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo';

// request.get({
//     url: url,
//     json: true,
//     headers: {'User-Agent': 'request'}
//   }, (err, res, data) => {
//     if (err) {
//       console.log('Error:', err);
//     } else if (res.statusCode !== 200) {
//       console.log('Status:', res.statusCode);
//     } else {
//       app.get('/', (req, res) => {
//         res.send(data)
//       })
//     }
// });


const uri = "mongodb://127.0.0.1:27017/";

const client = new MongoClient(uri);

async function connect(obj){
  try{
    await client.connect();
    const db = client.db("stock_market_analysis");
    var collections = await db.collections();
    var login_info = collections[0];
    await login_info.insertOne(obj)

  }
  catch(ex){ 
    console.log("an error occured " + ex);
  }
  finally{
    client.close();
  }
}

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
