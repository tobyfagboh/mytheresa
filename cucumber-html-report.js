const report = require("multiple-cucumber-html-reporter");
report.generate({
  jsonDir: "jsonlogs", // ** Path of .json file **//
  reportPath: "./reports/cucumber-htmlreport.html",
  metadata: {
    browser: {
      name: "chrome",
      version: "104.0.5112.79",
    },
    device: "Local test machine",
    platform: {
      name: "Mac OS",
      version: "12.3.1",
    },
  },
});
