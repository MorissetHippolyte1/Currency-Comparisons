function currencylistusd (){
    var requestUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd';

    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
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
        console.log(data);
      });
    
}
matchcrypto("eur");

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

