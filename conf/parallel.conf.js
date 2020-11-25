exports.config = {
  services: [
    [
      "lambdatest",
      {
        tunnel: true,
        lambdatestOpts: {
          logFile: "tunnel.log"
        }
      }
    ]
  ],
  user: process.env.LT_USERNAME,
  key: process.env.LT_ACCESS_KEY,
  specs: [
    './tests/specs/single_test.js'
  ],
  exclude: [],

  maxInstances: 10,
  commonCapabilities: {
    // name: 'Parallel Sample Test',
    // build: 'WebDriver Selenium Sample'
  },

  capabilities: [
    {
      platfrom: "win10",
      browserName: "chrome",
      version: "86.0"
    },
    {
      platform: "win10",
      browserName: "firefox",
      version: "80.0"
    },
    {
      platform: "win10",
      browserName: "firefox",
      version: "78.0"
    },
    {
      platform: "MacOS Catalina",
      browserName: "Chrome",
      version: "86.0",
 
    },
    {
      platform: "MacOS Catalina",
      browserName: "Chrome",
      version: "85.0",
 
    }
  ],

  logLevel: "info",
  coloredLogs: true,
  screenshotPath: "./errorShots/",
  baseUrl: "",
  waitforTimeout: 100000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  path: "/wd/hub",
  hostname: "hub.lambdatest.com",
  port: 80,
  framework: "mocha",
  mochaOpts: {
    ui: "bdd",
    timeout: 200000
  }
};

// Code to support common capabilities
exports.config.capabilities.forEach(function(caps) {
  for (var i in exports.config.commonCapabilities)
    caps[i] = caps[i] || exports.config.commonCapabilities[i];
});
