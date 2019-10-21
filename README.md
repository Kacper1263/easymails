Send emails faster <br /><br />
This package is based on nodemailer<br />
To install easymails use:<br />
```
npm i easymails
```

Just create new easymails and use it quickly<br />
```js
//Require easymails
var EasyMail = require('easymails')

//Create new EasyMail
var mailer = new EasyMail('gmail', 'myMail@gmail.com', 'myPassword')
//Send email
mailer.sendMail('myFriend@mail.com', 'New mail', 'This is my new mail')
```