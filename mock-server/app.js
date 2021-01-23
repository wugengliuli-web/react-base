const express = require("express");
const { join } = require("path");

const Port = 4000;
const app = express();

const staticDirs = [join(__dirname, "./static")];

const port = [
  {
    methods: "get",
    uri: "/get",
    cb: (req, res) => {},
  },
];

staticDirs.forEach((staticDir) => {
  app.use(express.static(staticDir));
});

port.forEach((item) => {
  const { methods, uri, cb } = item;
  app[methods](uri, cb);
});

app.listen(Port, () => {
  console.log(`mock server 开启${Port}`);
});
