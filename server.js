const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const fs = require('fs')

app.get('/', function (req, res) {
  fs.readFile(`${__dirname}/index.html`, (file) => {
  res.send('Hello World')
  })
})

app.listen(3000)


const accountSid = 'ACe3c85733d16ac48b099c8916e09fb56e'
const authToken = '1b4ffa2410ff54be2e4b50bc1b010f86'
const client = require('twilio')(accountSid, authToken)

client.messages
  .create({
     body: 'gonna ride the ol test train again',
     from: '+19704708659',
     to: '+13035477403'
   })
  .then(message => console.log(message.sid))
