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
  specs: ["./tests/specs/single_test.js"],
  exclude: [],

  capabilities: [
    {

      platform : "windows 10",
      browserName: "chrome",
      version: "80",
      name: "Test webdriverio",
      build: "build 1",
      //safari.cookies : true,
      //fixedIP: "10.81.35.56",
      network: false,
      video: true,
      visual: false,
      console: false
    }
  ],
  logLevel: "info",
  coloredLogs: true,
  screenshotPath: "./errorShots/",
  baseUrl: "",
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 1,
  path: "/wd/hub",
  hostname: "hub.lambdatest.com",
  port: 80,
  framework: "mocha",
  mochaOpts: {
    ui: "bdd",
    timeout: 200000
  }
};
