var request = require('request-json');
var client = request.createClient('https://www.bit2c.co.il/');

function callTicker() {
    return client.get('Exchanges/BtcNis/Ticker.json').then(function (result) {
        return result.body;
    });
}

function callOrderbook() {
    return client.get('Exchanges/BtcNis/orderbook.json').then(function (result) {
        return result.body;
    });
}

module.exports = {
    ticker: callTicker() ,
	 orderbook : callOrderbook()
};
  

