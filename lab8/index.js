const express = require("express");
const { initApiRoute } = require("./routes/api.js");

const app = express();

app.use(express.json());

initApiRoute(app);

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})

