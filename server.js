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
const colorPalletteRouter = require("./routes/colorpallette");
const pomodoroRouter = require("./routes/pomodoro");
const gobackToDashboard = require("./routes/gobackToDashboard");
const levelChartRouter = require("./routes/levelchart");
const gobackToProfile = require("./routes/gobackToProfile");
const aboutRouter = require("./routes/about");
const contactusRouter = require("./routes/contactus");
const errorpageRouter = require("./routes/errorPage");
const submittedRouter = require("./routes/submitted");
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
app.use("/", colorPalletteRouter);
app.use("/", pomodoroRouter);
app.use("/", gobackToDashboard);
app.use("/", levelChartRouter);
app.use("/", gobackToProfile);
app.use("/", aboutRouter);
app.use("/", contactusRouter);
app.use("/", errorpageRouter);
app.use("/", submittedRouter);
// PORT
const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Server Started"));
