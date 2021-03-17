const lightOn = (gpioLight) => {
  gpioLight.writeSync(1);
};

const lightOff = (gpioLight) => {
  gpioLight.writeSync(0);
};

module.exports = {
  lightOn,
  lightOff,
};
