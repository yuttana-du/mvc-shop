const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();


 // /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);

    //res.sendFile(path.join(rootDir,'views','add-product.html'));
    //res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
                //หลังจาก ไปที่ /admin/add-product ด้วย วิธี POST
    //products.push({ title: req.body.title }); เก็บค่าใน title ที่ได้จาก POST มาไว้ใน Title

 // /admin/products => GET
router.get('/products', adminController.getProducts);

 // /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

router.get('/edit-product/:productId',adminController.getEditProduct);

router.post('/edit-product',adminController.postEditProduct);

router.post('/delete-product',adminController.postDeleteProduct);

module.exports = router;



