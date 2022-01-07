var titleEl = document.querySelector('.title')
var searchFormEl = document.querySelector('#search-form')
var amountInputEl = document.querySelector('#amount-input')
var formatInputEl = document.querySelector('#format-input')
var compareEl = document.querySelector('.compare')
var addSavedEl = document.querySelector('.addSaved')
var boxHeader = document.querySelector('boxHeader')
var boxTitle = document.querySelector('boxTitle')
var boxInfoEl = document.querySelector('.boxInfo')
var currencyBoxEl = document.querySelector('.currencyBoxEl')
var currencyCompareEl = document.querySelector('.currencyCompare')
var newsEl = document.querySelector('.news')
var articleEl = document.querySelector('.article')
var cryptoPrice = document.getElementById("crypto");
var govPrice = document.getElementById("gov");

function currencylistusd (){
    var requestUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd';

    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log("usd")
        console.log(data);
      });
    
}
currencylistusd();

function matchcrypto(currency, amount) {
    var requestUrl = new URL('https://api.coingecko.com/api/v3/coins/markets?');
    x= "vs_currency"
    y= currency
    requestUrl.searchParams.append(x, y);
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log("function input currency");
        console.log(data);
        for ( var i = 0; i<9;i++){
          cryptoPrice.appendChild(document.createElement('ul')).textContent = 
          parseFloat(amount/data[i].current_price).toFixed(2) + " " + data[i].name;
        for ( var i = 0; i<19; i++)
          formatInputEl.appendChild(document.createElement('option')).value = "Crypto "  + data[i].name;
        }
      });
    
}
matchcrypto("usd", 1000000);

function logtop50cryptoprices(currency) {
    var requestUrl = new URL('https://api.coingecko.com/api/v3/coins/markets?');
    x= "vs_currency"
    y= currency
    requestUrl.searchParams.append(x, y);
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        for ( var i = 0; i<49;i++){
            console.log(data[i].name + ": " + data[i].current_price + " " + currency + "(s)");
        }
      });
    
}
logtop50cryptoprices("eur");

function govcurrencylist (){
  var requestUrl = new URL('https://api.frankfurter.app/currencies?');


  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
  
}
govcurrencylist();

function govcurrencyexchange (currency, amount){
  var requestUrl = new URL('https://api.frankfurter.app/latest?');
  x= "from"
  y= currency
  requestUrl.searchParams.append(x, y);
  a= "amount"
  b = amount
  requestUrl.searchParams.append(a, b);
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log("exchange")
      console.log(data);
      console.log("data value")
      var govArrayPrice = Object.values(data.rates);
      var govArrayKey = Object.keys(data.rates);
      console.log(govArrayPrice);
      console.log(govArrayKey);
      for ( var i = 0; i<9;i++){
        govPrice.appendChild(document.createElement('ul')).textContent = 
        parseFloat(govArrayPrice[i]).toFixed(2) + " " + govArrayKey[i];
        for ( var i = 0; i<19; i++){ 
        var dropDownChoice = formatInputEl.appendChild(document.createElement('option')).value = "Gov "  + govArrayKey[i];
        dropDownChoice
      }
    }
    });
  
}
govcurrencyexchange("USD", 10);

function news (){
  fetch("https://crypto-news-live.p.rapidapi.com/news/coindesk", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "crypto-news-live.p.rapidapi.com",
      "x-rapidapi-key": "1c706ef656msh2980b7876759cc5p1013b9jsn6d3391c16b20"
    }
  })
  .then(function (response) {
    return response.json();
  })
  .then(response => {
    console.log("news")
    console.log(response);
  })
  .catch(err => {
    console.error(err);
  });
}
news();

var amountFormEl = document.querySelector('#currency-form');

function handleSearchFormSubmit(event) {
  event.preventDefault();

  var amountInputVal = document.querySelector('#amount-input').value;
  var formatInputVal = document.querySelector('#format-input').value;

  if (!amountInputVal) {
    console.error('You need a search input value!');
    return;
  }

  var queryString = 'https://api.coingecko.com/api/v3/coins/list' + formatInputVal;

  (queryString);
}

// function addFormSelectors() { 
//   var dropDownChoice = function() {
//    var dropDownEl = document.createElement('option');
//    var dropDownChoice =  
//     document.appendChild
//   document.createElement()
  //for loop for creating element
  //need to pull information from api
// document.createElement(variable ), document.body.appendChild(tag)
// add event listener .addEventListener("click", function() 


//}
// amountFormEl.addEventListener('submit', handleSearchFormSubmit);

