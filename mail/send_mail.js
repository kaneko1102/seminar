const send = require('gmail-send')({
  user: '',
  pass: '',
  to:   '',
  subject: 'テスト',
});

send({
  text:    'テスト \n テストメール\n',  
}, (error, result, fullResult) => {
  if (error) console.error(error);
  console.log(result);
})
