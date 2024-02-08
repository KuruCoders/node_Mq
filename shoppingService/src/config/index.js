const dotEnv = require("dotenv");

console.log(process.env.NODE_ENV)
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
  SHOPPING_BINDING_KEY:'SHOPPING_SERVICE',
  CUSTOMER_BINDING_KEY:'CUSTOMER_SERVICE',
  MSG_BROKER_URL: process.env.MSG_BROKER_URL,
  QUEUE_NAME:'shopping_queue'
};
