### Setup
For first time setup run from the project directory
1. `npm install` - sets up project dependencies
2. `npm run webdriver:install` - sets up selenium webdriver (for testing with browsers)

#### To run tests
> Note: Each command should run in the project root in a separate terminal window as it's two different processes
1. `npm run webdriver:start` - this starts the webdriver service
2. `npm run test` - starts all the test files

For the test project configuration and setup refer to [codecept.conf.js](codecept.conf.js) and the official [codeceptjs documentation](https://codecept.io/acceptance/) 
