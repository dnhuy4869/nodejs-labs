const { pool } = require("../configs/connectDB");

const addNewProduct = async (req, res) => {
    const file = req.file
    let name = req.body.name;
    let price = req.body.price;
    let description = req.body.desc;
    let nameImage = file.filename;
    let longDesc = description + description + description;

    await pool.execute('insert into products SET nameProduct=?, priceProduct=?, sortDescription=?, description=?, images=?', 
                        [name, price, description, longDesc, nameImage]);

    res.redirect('/admin')
}

const editProduct = async (req, res) => {
    const id = req.params.id
    let name = req.body.name;
    let price = req.body.price;
    let description = req.body.desc;

    await pool.execute(`update products SET nameProduct=?, priceProduct=?, sortDescription=? where idProduct=${id}`, 
                        [name, price, description]);

    res.redirect('/admin');
}

const deleteProduct = async (req, res) => {
    const id = req.params.id

    await pool.execute(`delete from products where idProduct=${id}`);

    res.redirect('/admin');
}

module.exports = { 
    addNewProduct,
    editProduct,
    deleteProduct,
 };