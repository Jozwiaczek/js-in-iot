const { RED_LIGHT } = require('./GPIO');
const { lightOn, lightOff } = require('./manageLights');

const test_led = () => {
  lightOn(RED_LIGHT);

  setTimeout(() => {
    lightOff(RED_LIGHT);
  }, 3000);
};

test_led();

module.exports = {
  test_led,
};
