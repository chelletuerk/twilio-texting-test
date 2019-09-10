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


const accountSid = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
const authToken = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
const client = require('twilio')(accountSid, authToken)

client.messages
  .create({
     body: 'gonna ride the ol test train again',
     from: '+xxxxxxxxxxx',
     to: '+xxxxxxxxxxx'
   })
  .then(message => console.log(message.sid))
