function apitest (){
    var requestUrl = 'https://api.coingecko.com/api/v3/coins/list';

    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      });
    
}
apitest;

function currencylist (){
    var requestUrl = 'https://api.coingecko.com/api/v3/coins/markets';

    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      });
    
}
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

amountFormEl.addEventListener('submit', handleSearchFormSubmit);

