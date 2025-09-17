const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const bodyParser = require("body-parser");
const User = require("./models/Users");

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("views"));
app.use(
  session({
    secret: "mysecretkey",
    resave: false,
    saveUninitialized: true,
  })
);

// MongoDB connection
mongoose
  .connect("mongodb+srv://harishgb3805:gbharish@cluster0.alxqt9h.mongodb.net/?retryWrites=true&w=majority")
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error(err));

// Routes
app.get("/", (req, res) => {
  if (req.session.user) {
    res.send(`<h2>Welcome, ${req.session.user.name} 🎉</h2>
              <a href="/logout">Logout</a>`);
  } else {
    res.redirect("/signin.html");
  }
});

app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  // Check if user exists
  const existingUser = await User.findOne({ email });
  if (existingUser) return res.send("⚠️ User already exists!");

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Save new user
  const user = new User({ name, email, password: hashedPassword });
  await user.save();

  res.send("✅ Signup successful! <a href='/signin.html'>Login</a>");
});

app.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.send("❌ Invalid email or password");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.send("❌ Invalid email or password");

  req.session.user = user;
  res.redirect("/");
});

app.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/signin.html");
});

// Start server
app.listen(3000, () => console.log("🚀 Server running on http://localhost:3000"));
