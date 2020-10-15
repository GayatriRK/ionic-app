const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

  //mongodb code start here
const Product = require('../models/product');
  //mongodb code end here

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'handling GET request to /products'
    });
});

router.post('/', (req, res, next) => {
    // const product = {
    //     name: req.body.name,
    //     price: req.body.price
    // };

    //mongodb code start here
    const product = new Product({
        _id: new mongoose.Types.ObjectId,
        name: req.body.name,
        price: req.body.price
    });
    product
    .save()
    .then(result => {
        console.log(result);
    })
    .catch(err => console.log(err));
      //mongodb code end here

    res.status(201).json({
        message: 'handling POST request to /products',
        createdProduct: product
    });
}); 

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    Product.findById(id)
    .exec()
    .then(doc => {
        console.log(doc);
        res.status(200).json(doc);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });

    //dummy id starts here
    // if( id === 'adu') {
    //     res.status(200).json({
    //         message: 'you discoved the special Id',
    //         id: id
    //     });
    // }else{
    //     res.status(200).json({
    //         message: 'you passed Id'
    //     });
    //    }
    //dummy id ends here
   
});

router.patch('/', (req, res, next) => {
    res.status(200).json({
        message: 'updated products'
    });
});

router.delete('/', (req, res, next) => {
    res.status(200).json({
        message: 'deleted products'
    });
});
module.exports = router;





