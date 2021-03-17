require('dotenv/config');
const awsIot = require('aws-iot-device-sdk');
const { test_led } = require('../onoff');

const device = awsIot.device({
  keyPath: `${__dirname}/certificates/ce45efc6bb-private.pem.key`,
  certPath: `${__dirname}/certificates/ce45efc6bb-certificate.pem.crt`,
  caPath: `${__dirname}/certificates/root.pem`,
  clientId: 'raspberryPi4',
  host: process.env.AWS_IOT_HOST,
});

device.on('connect', () => {
  console.log('connected');
  device.publish('connected', JSON.stringify({ message: 'connected' }));
  device.subscribe('turnOn');
});

device.on('message', (topic, payload) => {
  switch (topic) {
    case 'turnOn': {
      console.log('Led turned on');
      test_led();
      break;
    }
    default: {
      console.log('Unsupported topic:', topic, payload.toString());
      break;
    }
  }
});
