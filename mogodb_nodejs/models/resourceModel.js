const moongose = require('mongoose');

const resourceSchema = new moongose.Schema({
  onderwerp: {
    type: String,
    required: [true, 'Een onderwerp moet ingevuld worden'],
  },
  type: {
    type: String,
    required: [true, 'Een type moet gekozen worden'],
    enum: {
      values: ['website', 'video'],
      message: 'Type kan alleen website of video zijn',
    },
  },
  name: {
    type: String,
    required: [true, 'Een naam moet ingevuld worden'],
    unique: true,
    trim: true,
  },
  summary: {
    type: String,
    trim: true,
  },
  link: {
    type: String,
    required: [true, 'Een link moet ingevuld worden'],
  },
});

const Resource = moongose.model('Resource', resourceSchema);

module.exports = Resource;
