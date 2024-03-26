// this is an example of .env-cmd.js
module.exports = Promise.resolve({
  base: {
    NODE_ENV: "development",
    TEST_NAME: "Async RC File Test",
    ENVVAR: "exists",
  },
  prod: {
    TEST_NAME: "Async RC File Test",
    NODE_ENV: "production",
    ENVVAR: "exists",
    ENV_PATH: "./async-rc.js",
  },
  dev: {
    TEST_NAME: "Async RC File Test",
    NODE_ENV: "development",
  },
});
