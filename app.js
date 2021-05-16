const express = require("express");
const exphbs = require("express-handlebars");
const session = require("express-sessions");

// Import Routes

const homeRouter = require("./routes/home");
const signupRouter = require("./routes/signup");
const app = express();

app.engine(".hbs", exphbs({ extname: ".hbs" }));
app.set("view engine", ".hbs");

// HANDLEBARS
app.use(express.static("public"));

// ROUTES
app.use("/", homeRouter);
app.use("/", signupRouter);

app.listen(5002, () => console.log("Server Started"));
