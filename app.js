const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// APP STARTS HERE
const port =process.env.PORT || 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

mongoose
  .connect(
    "Enter your Mongoose URL Here!"
  )
  .then(() => {
    console.log("Mongoose is connected successfully");
  })
  .catch((err) => {
    console.log("Error occurred while connecting to Mongoose:", err);
  });

const TodoSchema = {
  name: String,
};

const WorkSchema = {
  name: String,
};

const TodoItem = mongoose.model("TodoItem", TodoSchema);
const WorkItem = mongoose.model("WorkItem", WorkSchema);

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "routes"));

app.use(async (req, res, next) => {
  try {
    const todoCount = await TodoItem.countDocuments();
    const workCount = await WorkItem.countDocuments();

    if (todoCount === 0) {
      const defaultTodoItems = [
        { name: "WELCOME TO YOUR TODO APP" },
        { name: "< Delete Your Todo Tasks" },
        { name: "Enter Your Task Above >" },
      ];
      await TodoItem.insertMany(defaultTodoItems);
      console.log("Default todo items inserted successfully");
    }

    if (workCount === 0) {
      const defaultWorkItems = [
        { name: "WELCOME TO YOUR WORK APP" },
        { name: "< Delete Your Work Tasks" },
        { name: "Enter Your Task Above >" },
      ];
      await WorkItem.insertMany(defaultWorkItems);
      console.log("Default work items inserted successfully");
    }

    next();
  } catch (err) {
    console.error("Error handling default items:", err);
    res.status(500).send("Internal Server Error");
  }
});

app.get(["/", "/work"], async (req, res) => {
  try {
    let itemList;
    if (req.path === "/") {
      itemList = await TodoItem.find({});
      res.render("List.ejs", {
        title: "HOME LIST",
        category: "Home",
        formAction: "/",
        itemList,
      });
    } else {
      itemList = await WorkItem.find({});
      res.render("Work.ejs", {
        title: "WORK LIST",
        category: "WORK",
        formAction: "/work",
        workList: itemList,
      });
    }
  } catch (err) {
    console.error(`Error fetching data for ${req.path}:`, err);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/", async (req, res) => {
  try {
    const todoTask = req.body.task;
    const todoItem = new TodoItem({
      name: todoTask,
    });
    await todoItem.save();
    res.redirect("/");
  } catch (err) {
    console.error("Error saving todo item:", err);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/work", async (req, res) => {
  try {
    const workTask = req.body.task;
    const workItem = new WorkItem({
      name: workTask,
    });
    await workItem.save();
    res.redirect("/work");
  } catch (err) {
    console.error("Error saving work item:", err);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/delete/:id", async (req, res) => {
  const itemId = req.params.id;
  try {
    await TodoItem.findByIdAndDelete(itemId);
    res.redirect("/");
  } catch (err) {
    console.error("Error deleting todo item:", err);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/workdelete/:id", async (req, res) => {
  const workid = req.params.id;
  try {
    await WorkItem.findByIdAndDelete(workid);
    res.redirect("/work");
  } catch (err) {
    console.error("Error deleting work item:", err);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Port Listening: http://localhost:${port}`);
});
