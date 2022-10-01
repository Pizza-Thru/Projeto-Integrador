require("dotenv").config();
const express = require("express");
const exphbs = require("express-handlebars");
const mysql = require("mysql");

const app = express();

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

/* Ler o body */
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use(express.static("public"));

/* import routes */
const router = require("./src/routes/router");

/* routes */
app.use("/", router);

/* start server */
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Pizza_Thru");
  }
  app.listen(process.env.PORT, () => {
    console.log(`Server rodando na porta ${process.env.PORT}`);
  });
});
