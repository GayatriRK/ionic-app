const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Order was fetched'
    });
});

router.post('/', (req, res, next) => {
    const order = {
        productId: req.body.productId,
        quantity: req.body.quantity
    };
    res.status(201).json({
        message: 'Order was created',
        order: order
    });
});

router.get('/:orderId', (req, res, next) => {
    const id = req.params.orderId;
    if( id === 'gayu') {
        res.status(200).json({
            message: 'you discoved the special Id',
            id: id
        });
    }else{
        res.status(200).json({
            message: 'you passed Id'
        });
    }
   
});

router.patch('/', (req, res, next) => {
    res.status(200).json({
        message: 'updated orders'
    });
});

router.delete('/', (req, res, next) => {
    res.status(200).json({
        message: 'deleted orders'
    });
});
module.exports = router;

