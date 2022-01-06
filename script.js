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

amountFormEl.addEventListener('submit', handleSearchFormSubmit);  