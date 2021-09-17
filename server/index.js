const app = require("./api");

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Allll aboard! Our Express train is departingd from port ${port}! Choo Choo!`))