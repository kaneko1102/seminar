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
