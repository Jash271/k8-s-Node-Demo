const app = require('./server');
const connectDB = require('./config/db');

connectDB();

const port = 5000;

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
