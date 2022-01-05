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