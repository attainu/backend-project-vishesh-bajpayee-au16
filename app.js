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
const profileRouter = require("./routes/profile");
const notesRouter = require("./routes/notes");
const todoRouter = require("./routes/todo");
const commitcounterRouter = require("./routes/commitcounter");
const pomodoroRouter = require("./routes/pomodoro");
const gobackToDashboard = require("./routes/gobackToDashboard");
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
app.use(express.json());

// ROUTES
app.use("/", homeRouter);
app.use("/", signupRouter);
app.use("/", loginRouter);
app.use("/", gobackRouter);
app.use("/", dashboardRouter);
app.use("/", getRepoRouter);
app.use("/", profileRouter);
app.use("/", logoutRouter);
app.use("/", notesRouter);
app.use("/", todoRouter);
app.use("/", commitcounterRouter);
app.use("/", pomodoroRouter);
app.use("/", gobackToDashboard);

<<<<<<< HEAD
// PORT
const port = 5000;

app.listen(port, () => console.log("Server Started"));
=======

app.listen(3100, () => console.log("Server Started"));
>>>>>>> 34ecd9a84325ff2a4fbe804ded8d87ec3803ff60
