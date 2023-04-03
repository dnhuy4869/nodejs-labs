const postRoute = require("./post.js");

const initApiRoute = (app) => {
    app.use("/", postRoute);
}

module.exports = {
    initApiRoute
}