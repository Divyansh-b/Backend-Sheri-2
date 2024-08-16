const express = require("express");
const app = express();
const userModel = require("./usermodel");

// const path = require("path");

// app.set("view engine", "ejs");

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
  res.send("Hey");
});

app.get('/create', async (req, res) => {

  let createdUser = await userModel.create({
    name: "Divyansh Bansal",
    username: "Yaansh",
    email: "divyanshbansal56@gmail.com"
  })

  res.send(createdUser);
});

app.get('/update', async (req, res) => {

  let updatedUser = await userModel.findOneAndUpdate({ name: "Divyansh Bansal" }, { name: "Divyansh" }, { new: true })

  res.send(updatedUser);
});

app.get('/read', async (req, res) => {
  let readUser = await userModel.find({ name: "Divyansh" });
  res.send(readUser);
});

app.get('/delete', async (req, res) => {
  let deletedUser = await userModel.findOneAndDelete({ name: "Divyansh" });
  res.send(deletedUser);
});


app.listen(3000);
