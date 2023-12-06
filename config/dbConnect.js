const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECT_DB);

module.exports = mongoose