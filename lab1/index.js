const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded());

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})

app.get("/", (req, res) => {
    res.send("<p>This is the home page</p>");
})

app.get("/product", (req, res) => {
    res.send("<p>This is product page</p>");
})

app.get("/add-product", (req, res) => {
    res.send(`<form action="/product" method="POST"><input type="text" name="productName" /> <button type="submit">Add Product</button> </form>`)
})

app.post("/product", (req, res) => {
    res.send("<p>Product posted</p>");
})

const inventors = [
    {
        id: 1,
        first: "Albert",
        last: "Einstein",
        year: 1879,
        passed: 1995
    },
    {
        id: 2,
        first: "Isaac",
        last: "Newton",
        year: 1643,
        passed: 1727
    },
    {
        id: 3,
        first: "Galileo",
        last: "Galilei",
        year: 1564,
        passed: 1642
    },
    {
        id: 4,
        first: "Marie",
        last: "Curie",
        year: 1867,
        passed: 1943,
    },
    {
        id: 5,
        first: "Jonhnes",
        last: "Kepler",
        year: 1571,
        passed: 1630,
    },
    {
        id: 6,
        first: "Nicolaus",
        last: "Copernicus",
        year: 1473,
        passed: 1543,
    },
];

app.get("/inventors", (req, res) => {
    let list = `<h2>List inventors<ul>`;
    inventors.forEach((item, index) => {
        list += `<li><a style="text-decoration:none;color:green;" href="/inventor/${item.id}" >${item.first} ${item.last}</a></li>`;
    });

    list += `</ul></h2>`;
    res.send(list);
})

app.get("/inventor/:id", (req, res) => {
    let id = req.params.id;
    const inventor = inventors.find(i => i.id == id);

    let info = `<h2>Full name: ${inventor.first} ${inventor.last} Year: ${inventor.year} Passed: ${inventor.passed}</h2>`;

    res.send(info);
    //res.json(inventor);
})

app.get("/add-inventor", (req, res) => {
    res.send(`<h1>Add inventor</h1>
    <form action="/inventor" method="POST">
    <input type="text" name="first" placeholder="First name" />
    <input type="text" name="last" placeholder="Last name" />
    <input type="text" name="year" placeholder="Year" />
    <input type="text" name="passed" placeholder="Passed" />
    <br />
    <button type="submit">Add inventor</button>
    </form>`);
})

app.post("/inventor", (req, res) => {
    let newInventor = req.body;
    newInventor.id = inventors.length + 1;
    inventors.push(newInventor);
    res.redirect("/inventors"); 
})
