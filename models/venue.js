var mongoose = require('mongoose');

var VenueSchema = new mongoose.Schema({
    name: String,
    updated_date: { type: Date, default: Date.now },
  });

  module.exports = mongoose.model('Venue', VenueSchema);