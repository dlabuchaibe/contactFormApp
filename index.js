const express = require('express');
const config = require('./config');
const api = require('./api')

const app = express();

app.use(express.json());
app.use('/api', api);
app.use(express.static('./public'));
 
app.listen(config.port, () => {
    console.log('Servidor Iniciado')
})