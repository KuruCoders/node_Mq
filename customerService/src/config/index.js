const dotEnv = require("dotenv");

if (process.env.NODE_ENV !== "prod") {
  const configFile = `./.env.${process.env.NODE_ENV}`;
  dotEnv.config({ path: configFile });
} else {
  dotEnv.config();
}

module.exports = {
  PORT: process.env.PORT,
  DB_URL: process.env.MONGODB_URI,
  APP_SECRET: process.env.APP_SECRET,
  EXCHANGE_NAME:'ONLINE_SHOPPING',
  CUSTOMER_BINDING_KEY:'CUSTOMER_SERVICE',
  MSG_BROKER_URL: process.env.MSG_BROKER_URL,
  QUEUE_NAME:'customer_queue'
};
