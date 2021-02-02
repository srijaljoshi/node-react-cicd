const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.HTTP_PORT || 4000;

app.use(express.static(path.join(__dirname, "client", "build")));

app.get("/", (req, res) => {
  res.send("Hello from home page");
});

app.get("/api", (req, res) => {
  res.json({
    page: "/api",
    author: "Srijal Joshi",
    type: "Node.js backend with React frontend",
    reference:
      "https://medium.com/@wlto/how-to-deploy-an-express-application-with-react-front-end-on-aws-elastic-beanstalk-880ff7245008",
  });
});

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}.`);
});
