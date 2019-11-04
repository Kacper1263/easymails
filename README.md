Send emails faster <br /><br />
This package is based on nodemailer<br />
## Installation
To install easymails use:<br />
```
npm i easymails
```
## Usage
Just create new easymails and use it quickly<br />
If you are creating mailer in [known service](https://nodemailer.com/smtp/well-known/) e.g. Gmail<br />
```js
//Require easymails
var EasyMail = require('easymails')

//Create mailer
var mailer = new EasyMail('gmail', 'myMail@gmail.com', 'myPassword')
//Send email
mailer.sendMail('myFriend@mail.com', 'New mail', 'This is my new mail')
```
<br />

Or if you want to create mailer in custom service<br />
```js
//Require easymails
var EasyMail = require('easymails')

//Create mailer in custom service
var mailer = new EasyMail('custom', 'myMail@gmail.com', 'myPassword', "smtp.mysmtp.com", 123)
//Send email
mailer.sendMail('myFriend@mail.com', 'New mail', 'This is my new mail')
```
