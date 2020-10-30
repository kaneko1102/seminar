var request = require('request');

var URL = 'https://rss-weather.yahoo.co.jp/rss/days/4410.xml';

var re_item = RegExp("(?<=<item>).*?(?=</item>)")
var re_title = RegExp("(?<=<title>).*?(?=</title>)")

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    var item = re_item.exec(body);
	  var weather = re_title.exec(item[0]);
	  console.log(weather[0]);
  }
  else{
    console.log("Error!");
  }
}

request(URL, callback);
