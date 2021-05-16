const express = require("express");
const exphbs = require("express-handlebars");
const session = require("express-sessions");

const app = express();

app.engine(".hbs", exphbs({ extname: ".hbs" }));
app.set("view engine", ".hbs");

// HANDLEBARS
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(5000, () => console.log("Server Started"));
