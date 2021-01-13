const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const morgan = require('morgan');
const post_route = require('./Routes/Post');
const serverless = require('serverless-http');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;

app.use(morgan('dev'));
app.use(express.json());

app.use(cors());
app.use('/api', post_route);

app.get('/', (req, res) => {
  res.send('API Running');
});

// module.exports.handler = serverless(app, {
//   request: function (req, event, context) {
//     context.callbackWaitsForEmptyEventLoop = false;
//     req.event = event;
//     req.context = context;
//   },
// });
connectDB();
app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
