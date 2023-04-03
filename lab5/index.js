const express = require('express');
const bodyParser = require('body-parser');
const blogRoutes = require("./routes/blog.js");
const sequelize = require("./util/database");

const app = express();
app.use(bodyParser.json());

const port = 8000;

app.use('/blog', blogRoutes);

sequelize.sync()
        .then(result => {
            app.listen(port,()=>{
                console.log(`Server listening on port ${port}`);
            })
        })
        .catch(err => {
            console.log(err);
        })