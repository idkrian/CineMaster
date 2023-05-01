const app = require(`${__dirname}/app.js`);
const dotenv = require("dotenv");
const port = 3000;
const mongoose = require("mongoose");
dotenv.config({ path: "./.env" });

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then((con) => {
  console.log("Connected");
});

app.listen(port, () => {
  console.log("Running...");
});
