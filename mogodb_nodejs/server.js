const moongose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

moongose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then((c) => {
    console.log('DB connection successful');
  });

const port = 3000 || process.env.PORT;
app.listen(port, () => {
  console.log(`app running on port ${port}...`);
});
