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

app.get('/suggestion', (req, response) => {
  // console.log(req.query.keyword);

  var keywordurl = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${req.query.keyword}&apikey=MURG2M4JADY0CNBX`;

  request.get({
    url: keywordurl,
    json: true,
    headers: {'User-Agent': 'request'}
  }, (err, res, data) => {
    if (err) {
      console.log('Error:', err);
    } else if (res.statusCode !== 200) {
      console.log('Status:', res.statusCode);
    } else {
      response.send(data)  
      // console.log(data.bestMatches[0]['2. name']);
    }
});
})


'use strict';
var request = require('request');
const { response } = require('express');

app.get('/getCompanyDetails', (req, response) => {
  console.log(req.query.cSymbol);
  var companyDetailsurl = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${req.query.cSymbol}&apikey=MURG2M4JADY0CNBX`;

  console.log(companyDetailsurl);

  request.get({
    url: companyDetailsurl,
    json: true,
    headers: {'User-Agent': 'request'}
  }, (err, res, data) => {
    if (err) {
      console.log('Error:', err);
    } else if (res.statusCode !== 200) {
      console.log('Status:', res.statusCode);
    } else {
      // console.log(data);
      let CompanyOverview = { 
                    "Symbol" : data.Symbol,
                    "company name" : data.Name,
                    "Country" : data.Country,
                    "Sector" : data.Sector,
                    "MarketCapitalization" : data.MarketCapitalization,
                    "DividendPerShare" : data.DividendPerShare,
                    "DividendYield" : data.DividendYield,
                    "52WeekHigh" : data['52WeekHigh'],
                    "52WeekLow" : data['52WeekLow'],
                    "50DayMovingAverage" : data["50DayMovingAverage"],
                    "200DayMovingAverage" : data["200DayMovingAverage"],
                    "PERatio": data.PERatio,
                    "PEGRatio": data.PEGRatio,
                    "BookValue": data.BookValue
                  }
      response.send(CompanyOverview)
      // console.log(CompanyOverview);   
    }
});
})

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
