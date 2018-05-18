require('env2')('.env')
var pump = require('pump')
var slack = require('slack')
var through = require('through2')
var websocket = require('websocket-stream')

var user = {
  token: process.env.token
}

var id = 1

slack.rtm.connect(user, function (err, rtm) {
  if (err) return console.error(err)
  var ws = websocket(rtm.url)
  var typing = through(write)
  pump(ws, typing, ws, function (err) {
    if (err) return console.error(err)
  })
})

function write (buf, enc, next) {
  var row = JSON.parse(buf.toString())
  if (row.type !== 'user_typing') return next()

  var msg = {
    id: id++,
    channel: row.channel,
    type: 'typing'
  }

  var payload = JSON.stringify(msg)
  next(null, payload)
}
