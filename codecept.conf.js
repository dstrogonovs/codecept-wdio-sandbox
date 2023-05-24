/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://juniortest-reinis.web.app',
      browser: 'chrome',
      // @see: https://codecept.io/acceptance/
      // smartWait: 5000,
    }
  },
  include: {
    I: './steps_file.js'
  },
  name: 'codecept'
}
