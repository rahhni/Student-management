const mongoose = require('mongoose');

const standupSchema = new mongoose.Schema({
    studentName: { type: String },
    projectAssigned: { type: String },
    workYesterday: { type: String },
    workToday: { type: String },
    impediment: { type: String },
    createdOn: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Standup', standupSchema)
