require("dotenv").config();
const express = require("express");
const exphbs = require("express-handlebars");
const conn = require("./db/conn");

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
conn
  .sync()
  //.sync({force: true}) Não tirar o comentário pois irar apagar e recriar o banco de dados!!!!!
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Server running");
    });
  });