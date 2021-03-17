const { Gpio } = require('onoff');

const RED_LIGHT = new Gpio(21, 'out');
const YELLOW_LIGHT = new Gpio(15, 'out');
const GREEN_LIGHT = new Gpio(13, 'out');

module.exports = {
  RED_LIGHT,
  YELLOW_LIGHT,
  GREEN_LIGHT,
};
