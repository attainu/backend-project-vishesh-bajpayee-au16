require("dotenv").config();
const express = require("express");
const exphbs = require("express-handlebars");

const Mongoose = require("mongoose");
const app = express();

// IMPORT ROUTES
const homeRouter = require("./routes/home");
const signupRouter = require("./routes/signup");
const gobackRouter = require("./routes/gobacktohome");
const loginRouter = require("./routes/login");
const dashboardRouter = require("./routes/dashboard");
const getRepoRouter = require("./routes/get-repo");
const logoutRouter = require("./routes/logout");

// MONGO DATABASE CONNECTION
const { DATABASE_URL } = process.env;

Mongoose.connect(
  DATABASE_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Mongoose Connected");
  }
);

// HANDLEBAR ACTIVATION
app.engine(".hbs", exphbs({ extname: ".hbs" }));
app.set("view engine", ".hbs");

// MIDDLEWARE
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

// ROUTES
app.use("/", homeRouter);
app.use("/", signupRouter);
app.use("/", loginRouter);
app.use("/", gobackRouter);
app.use("/", dashboardRouter);
app.use("/", getRepoRouter);
app.use("/", logoutRouter);

app.listen(5000, () => console.log("Server Started"));
