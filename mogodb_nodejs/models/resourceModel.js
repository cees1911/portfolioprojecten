const moongose = require('mongoose');

const resourceSchema = new moongose.Schema({
  onderwerp: {
    type: String,
    required: [true, 'Een onderwerp moet ingevuld worden'],
  },
  type: {
    type: String,
    required: [true, 'Een type moet gekozen worden'],
  },
  name: {
    type: String,
    required: [true, 'Een naam moet ingevuld worden'],
    unique: true,
  },
});

const Resource = moongose.model('Resource', resourceSchema);

module.exports = Resource;
