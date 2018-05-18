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
  var autoreply = through(write)

  pump(ws, autoreply, ws, function (err) {
    if (err) console.error(err)
  })
})

function write (buf, enc, next) {
  var row = JSON.parse(buf.toString())

  var isMsg = row.type && row.type === 'message'
  var isDM = row.channel && row.channel.indexOf('D') === 0
  var isMention = row.text && row.text.indexOf(process.env.slackId) > -1

  var ok = isMsg || isDM || isMention

  if (!ok) return next()

  var msg = {
    channel: row.channel,
    text: 'autoreply: ' + process.argv[2],
    type: 'message',
    id: id++
  }

  console.log(row, msg)

  var payload = JSON.stringify(msg)
  next(null, payload)
}
