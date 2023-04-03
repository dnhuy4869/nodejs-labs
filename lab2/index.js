const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer")

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded());

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
})

var upload = multer({ storage: storage })

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));

app.get("/", (req, res) => {
    let today = new Date();
    let currDay = today.getDay();
    let day = '';

    switch (currDay) {
        case 0: {
            day = "Chủ nhật";
            break;
        }
        case 1: {
            day = "Thứ hai";
            break;
        }
        case 2: {
            day = "Thứ ba";
            break;
        }
        case 3: {
            day = "Thứ tư";
            break;
        }
        case 4: {
            day = "Thứ năm";
            break;
        }
        case 5: {
            day = "Thứ sáu";
            break;
        }
        case 6: {
            day = "Thứ bảy";
            break;
        }
        default: {
            console.log(`error: ${currDay}`);
            break;
        }
    }

    res.render("home", { kindOfDay: day });
});

var listProduct = [
    {
        id: 0101,
        title: "Apple Book",
        price: 3000,
        description: "A very interesting book about so many even more interesting things",
        imageURL: "book.jpg"
    },
    {
        id: 0102,
        title: "Microsoft Book",
        price: 2000,
        description: "A very interesting book about so many even more interesting things",
        imageURL: "book.jpg"
    },
    {
        id: 0103,
        title: "VFast Book",
        price: 1000,
        description: "A very interesting book about so many even more interesting things",
        imageURL: "book.jpg"
    },
];

app.get("/shop", (req, res) => {
    res.render("shop", { products: listProduct });
})

app.get("/add-new", (req, res) => {
    res.render("add-product");
})

app.post("/add-new", upload.single('img'), (req, res) => {
    const file = req.file
    let title = req.body.name;
    let price = req.body.price;
    let description = req.body.desc;
    let nameImage = file.filename;
    //Thêm vào mảng json 1 cuối sách mới
    listProduct.push({
        id: 0110,
        title: title,
        price: price,
        description: description,
        imageURL: nameImage,
    })
    //chuyển về trang sản phẩm
    res.redirect('/shop');
})