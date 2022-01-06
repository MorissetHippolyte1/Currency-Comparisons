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

function matchcrypto(currency) {
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
      });
    
}
matchcrypto("czk");

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

  var searchInputVal = document.querySelector('#amount-input').value;
  var formatInputVal = document.querySelector('#format-input').value;

  if (!searchInputVal) {
    console.error('You need a search input value!');
    return;
  }

  var queryString = './search-results.html?q=' + searchInputVal + '&format=' + formatInputVal;

  location.assign(queryString);
}



// amountFormEl.addEventListener('submit', handleSearchFormSubmit);

