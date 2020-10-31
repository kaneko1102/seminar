var request = require('request');

//東京の天気を取得
var URL = 'https://rss-weather.yahoo.co.jp/rss/days/4410.xml';

var re_item = RegExp("(?<=<item>).*?(?=</item>)")
var re_title = RegExp("(?<=<title>).*?(?=</title>)")

var user = process.argv[3]
var pass = process.argv[4]
var to = process.argv[2]
var subject = "Weather"

function send_mail(user,pass,to,subject,text){
    const send = require('gmail-send')({
      user: user,
      pass: pass,
      to:   to,
      subject: subject,
    });
    
    send({
      text:    text,  
    }, (error, result, fullResult) => {
      if (error) console.error(error);
      console.log(result);
    })
}

function callback(error, response, body) {
  var text;
  if (!error && response.statusCode == 200) {
    //<item>タグの中の<title>タグにある天気の情報を取得
    var item = re_item.exec(body);
    var weather = re_title.exec(item[0]);
    text = weather[0];
  }
  else{
    text = "Error!";
  }
  console.log(text);
  send_mail(user,pass,to,subject,text);
}

request(URL, callback);
