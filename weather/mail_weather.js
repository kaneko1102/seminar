var request = require('request');

var URL = 'https://rss-weather.yahoo.co.jp/rss/days/4410.xml';

var re_item = RegExp("(?<=<item>).*?(?=</item>)")
var re_title = RegExp("(?<=<title>).*?(?=</title>)")


const send = require('gmail-send')({
    user: process.argv[3],
    pass: process.argv[4],
    to:   process.argv[2],
    subject: 'テスト',
  });
  
  send({
    text:    'テスト \n テストメール\n',  
  }, (error, result, fullResult) => {
    if (error) console.error(error);
    console.log(result);
  })
  

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    var item = re_item.exec(body);
    if(!item){
      console.log("No title")
    }else{
	  var weather = re_title.exec(item[0]);
	  console.log(weather[0]);
	  
    }
  }else{
    console.log("Error!");
  }
}

request(URL, callback);
