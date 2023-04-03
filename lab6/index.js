const express = require('express');
const bodyParser = require('body-parser');
const blogRoutes = require("./routes/blog.js");
const sequelize = require("./util/database");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

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