const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Signup was fetched'
    });
}); 

router.post('/', (req, res, next) => {
    const signup = {
        signupId: req.body.signupId,
        quantity: req.body.quantity
    };
    res.status(201).json({
        message: 'signup was created',
        signup: signup
    });
});

router.get('/:signupId', (req, res, next) => {
    const id = req.params.signupId;
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
        message: 'updated signup'
    });
});

router.delete('/', (req, res, next) => {
    res.status(200).json({
        message: 'deleted signup'
    });
});
module.exports = router;

