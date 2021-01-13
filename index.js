const awsServerlessExpress = require('aws-serverless-express');

const connectDB = require('./config/db');

let connection = null;

module.exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  if (connection === null) connection = await connectDB();
  const app = require('./server');
  const server = awsServerlessExpress.createServer(app);
  return awsServerlessExpress.proxy(server, event, context, 'PROMISE').promise;
};
