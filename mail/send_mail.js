const sendmail = require('sendmail')();

sendmail({
    from: '',
    to: '',
    subject: 'テストメール',
    text: 'メールの本文です。',
  }, function(err, reply) {
    console.log(err && err.stack);
    console.dir(reply);
});
