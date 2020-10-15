const http = require('http');
const app = require('./app');
const mysql = require('mysql2');


const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port);


//---------------------------------------------------------

// const express = require('express');

// const bodyParser = require('body-parser');

// const authRoutes = require('./routes/auth');

// const errorController = require('./controllers/error');

// const app = express();

// const ports = process.env.PORT || 3000;
// app.use(bodyParser.json());

// app.use((req, res, next)=> {
// res.setHeader('Access-Control-Allow-Origin', '*');
// res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT , DELETE');
// res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
// next();

// });

// app.use('/auth',authRoutes);

// app.use(errorController.get404);

// app.use(errorController.get500);


// app.listen(ports, ()=> console.log(`Listen on port ${ports}`));



//-----------------------------------------------------

// let express = require('express');
// let app = express();

// let bodyParser = require('body-parser');
// let backendPort = 8084;

// let mock = {
//     userData: require('./mock/userData')
//     };

// app.use(function(req, res, next) {
// res.header('Access-Control-Allow-Origin', '*');
// res.header('Access-Control-Allow-Credentials', true);
// res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
// res.header(
// 'Access-Control-Allow-Headers',
// 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
// );
// next();
// });

// app.post('/login', function(req, res, next) {
//     let data = JSON.parse(req.body);
//     let email = data.email;
//     let password = data.password;
//     if (email === 'aditi@gmail.com' && password === 'gayatri13') {
//     return res.status(200).json(mock.userData);
//     } else {
//     return res
//     .status(200)
//     .send('{"error":{"text":"Bad request wrong email and password"}}');
//     }
//     });

// app.use(bodyParser.json());
// app.use(bodyParser.text());
// app.use(
// bodyParser.urlencoded({
// extended: true
// })
// );


// app.listen(backendPort, function() {
// console.log('Express server listening on port ' + backendPort);
// });