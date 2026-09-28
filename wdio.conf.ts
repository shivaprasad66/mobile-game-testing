export const config = {
  runner: "local",

  specs: ["./tests/game.e2e.ts"],

  maxInstances: 1,

  hostname: "127.0.0.1",
  port: 4723,
  path: "/",

  framework: "mocha",

  reporters: ["spec"],

  mochaOpts: {
    timeout: 120000,
  },

  capabilities: [
    {
      platformName: "Android",
      "appium:automationName": "UiAutomator2",
      "appium:deviceName": "I2404",
      "appium:udid": "10BF760C7N004B3",
      "appium:appPackage": "com.tpcstld.twozerogame",
      "appium:appActivity": ".MainActivity",
      "appium:noReset": true,
    },
  ],
};