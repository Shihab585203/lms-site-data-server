const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require("./data/categories.json");
const courses = require("./data/courses.json");

app.get("/", (req, res) => {
  res.send("LMS Server is Running...");
});

app.get("/course-categories", (req, res) => {
  res.send(categories);
});

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.get("/courses/:id", (req, res) => {
  const id = req.params.id;
  const selectedCourse = courses.find((c) => c._id === id);
  res.send(selectedCourse);
});

app.get("/category/:id", (req, res) => {
  const id = req.params.id;
  if (id === '08') {
    res.send(courses);
  } else {
    const categoryCourses = courses.filter(
      (course) => course.category_id === id
    );
    res.send(categoryCourses);
  }
});

app.listen(port, () => {
  console.log("LMS Server Running on Port", port);
});
