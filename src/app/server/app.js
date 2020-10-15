const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const util = require('util');
const mysql = require('mysql2');


const ordersRoutes = require('./api/routes/orders');
const productsRoutes = require('./api/routes/products');
const signupRoutes = require('./api/routes/signup');

  //--*mongodb atlas code start here--*
// mongoose.connect('mongodb+srv://node-shop:'+
//     process.env.MONGO_ATLAS_PW +
//     'node-shop@cluster0.5u2eh.mongodb.net/node-shop?retryWrites=true&w=majority',
//     {
//         useMongoClient:true
//     }
//     );
 //--*mongodb atlas code ends here--*

 //--*morgan code starts here--*
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
//--*morgan code ends here--*

//--*cors error handling start here--*
// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*"),
//     res.header(
//         "Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//         );
//     if (req.method === 'OPTIONS'){
//         res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, PATCH, DELETE');
//         return res.status(200).json({});
//     }
// });
//--*cors error handling end here--*

app.use('/orders', ordersRoutes);
app.use('/products', productsRoutes);
app.use('/signup', signupRoutes);

app.use((req, res, next) =>{
    const error = new Error('not found'); 
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) =>{
    res.status(error.status || 500);
    res.json({
        error:{
            message: error.message
        }
    });
});

console.log('server running');
module.exports = app;