const app = require('./app');
const dotenv = require('dotenv');

//config

require("dotenv").config({ path: "backend/config/config.env" });

app.listen(process.env.PORT, () => {
  console.log(`Listening on port http://localhost:${process.env.PORT}`);
});