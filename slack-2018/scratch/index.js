require('env2')('.env')
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
  ws.pipe(typing).pipe(ws)
})

function write (buf, enc, next) {
  var row = JSON.parse(buf.toString())
  if (row.type !== 'user_typing') return next()

  var msg = {
    type: 'typing',
    channel: row.channel,
    id: id++
  }

  var payload = JSON.stringify(msg)

  next(null, payload)
}
