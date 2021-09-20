const app = require("./server");

const port = process.env.PORT || 3000;

app.listen(port, () =>
  console.log(
    `Allll aboard! Our Express train is departing from port ${port}! Choo Choo!`
  )
);
