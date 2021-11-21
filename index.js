'use strict';
var request = require('request');
const express = require('express')
const cors = require('cors');
const rp = require('request-promise');
const cheerio = require('cheerio');
var bodyParser = require('body-parser');
const { MongoClient } = require("mongodb");
var axios = require("axios").default;
const util = require("util");
const app = express()
var axios = require("axios").default;
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.use(cors());

app.post('/login', (req, res) => {
  connectLogin(req.body);
})

app.post('/contactSubmit', (req, res) => {
  connectContact(req.body);
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

app.get('/getCompanyName', (req, res) => {

  var options = {
    method: 'GET',
    url: 'https://twelve-data1.p.rapidapi.com/symbol_search',
    params: {symbol: `${req.query.keyword}`, outputsize: '7'},
    headers: {
      'x-rapidapi-host': 'twelve-data1.p.rapidapi.com',
      'x-rapidapi-key': 'b697060cf2msh9dbece726f614b4p19ab64jsn16551bb4d43f'
    }
  };

  axios.request(options).then(function (response) {
    // console.log(response.data);
    res.send(response.data);
  }).catch(function (error) {
    console.error(error);
  });
})

app.get('/getScrapedData', (req, response) => {
  // console.log(req.query.cName);

  let scrapingUrl = `https://www.screener.in/company/${req.query.cName}/`;
  
  (async() => {
    try
    {
        let res = await rp({
            uri : scrapingUrl,
            headers : {
                'content-encoding': 'gzip',
                'vary': 'Accept-Encoding',
                'vary': 'Cookie',
                'x-content-type-options': 'nosniff',
                'x-content-type-options': 'nosniff',
                'x-frame-options': 'DENY',
                'x-frame-options': 'SAMEORIGIN'
            },
            gzip : true
        })
        .on('response', function(response) {
                global.sattusCode = response.statusCode;
            });
        if (global.sattusCode === 200){
            let $ = cheerio.load(res);
            let MarketCapSelector = '#top-ratios > li:nth-child(1) > span.nowrap.value > span';
            let CurrentPriceSelector = '#top-ratios > li:nth-child(2) > span.nowrap.value > span';
            let HighSelector = '#top-ratios > li:nth-child(3) > span.nowrap.value > span:nth-child(1)';
            let LowSelector = '#top-ratios > li:nth-child(3) > span.nowrap.value > span:nth-child(2)';
            let Stock_PESelector = '#top-ratios > li:nth-child(4) > span.nowrap.value > span';
            let BookValueSelector = '#top-ratios > li:nth-child(5) > span.nowrap.value > span';
            let DividendYieldSelector = '#top-ratios > li:nth-child(6) > span.nowrap.value > span';
            let ROCESelector = '#top-ratios > li:nth-child(7) > span.nowrap.value > span';
            let ROESelector = '#top-ratios > li:nth-child(8) > span.nowrap.value > span';
            let FaceValueSelector = '#top-ratios > li:nth-child(9) > span.nowrap.value > span';
            
            let MarketCap = $(MarketCapSelector)
            let CurrentPrice = $(CurrentPriceSelector)
            let High = $(HighSelector)
            let Low = $(LowSelector)
            let Stock_PE = $(Stock_PESelector)
            let BookValue = $(BookValueSelector)
            let DividendYield = $(DividendYieldSelector)
            let ROC = $(ROCESelector)
            let ROE = $(ROESelector)
            let FaceValue = $(FaceValueSelector)

            let data = ({
                "MarketCap" : MarketCap.text(),
                "CurrentPrice" : CurrentPrice.text(),
                "High" : High.text(),
                "Low" : Low.text(),
                "BookValue" : BookValue.text(),
                "Stock_PE" : Stock_PE.text(),
                "DividendYield" : DividendYield.text(),
                "ROC" : ROC.text(),
                "ROE" : ROE.text(),
                "FaceValue" : FaceValue.text()
            })
            response.send(data)
        }
    }
    catch (er)
    {
        response.send(
          {
            "error" : "data not found"
          }
        )
    }
})();

})

const uri = "mongodb://127.0.0.1:27017/";

const client = new MongoClient(uri);

async function connectLogin(obj){
  try{
    await client.connect();
    const db = client.db("stock_market_analysis");
    var collections = await db.collections();
    var login_info = collections[collections.indexOf("login_info")];
    await login_info.insertOne(obj)

  }
  catch(ex){ 
    console.log("an error occured " + ex);
  }
  finally{
    client.close();
  }
}

async function connectContact(obj){
  try{
    await client.connect();
    const db = client.db("stock_market_analysis");
    var collections = await db.collections();
    var collectionNames = [];
    collections[0].collectionName
    for (let i = 0; i < collections.length; i++) {
      collectionNames.push(collections[i].collectionName)
    }
    var contact_info = collections[collectionNames.indexOf("contact_submit")];
    await contact_info.insertOne(obj)
    console.log(obj);
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
