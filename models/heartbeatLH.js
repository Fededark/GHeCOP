var moongose = require("mongoose");

// AVG heartbeat of every minute of the last hour
var heartBeatSchemaLH = moongose.Schema({
    _user: { type: Number, ref: 'User' },
    avg_beat: Number,
    lastUpdate: { type: Date, default: Date.now }
})

module.exports = moongose.model('HeartBeatLH', heartBeatSchemaLH);