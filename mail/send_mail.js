
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

let subject = 'テスト'
let text='テストメール\nこれはテストです。'
send_mail(process.argv[3],process.argv[4],process.argv[2],subject,text);
