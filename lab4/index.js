const express = require("express");
const { configViewEngine } = require("./src/configs/viewEngine.js");
const { initAPIRoute } = require("./src/routes/api.js");
const { initWebRoute } = require("./src/routes/web.js");

const app = express();
const port = 8000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

configViewEngine(app);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
});

initWebRoute(app);
initAPIRoute(app);

