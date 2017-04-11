var moongose = require("mongoose");

// AVG heartbeat of every hour
var heartBeatSchema = moongose.Schema({
    _user: { type: Number, ref: 'User' },
    avg_beat: Number,
    lastUpdate: { type: Date, default: Date.now }
})

module.exports = moongose.model('HeartBeat', heartBeatSchema);