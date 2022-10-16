/* ler o arquivo de variável de sistema */
require('dotenv').config(); 
// require('dotenv').config({path: 'variaveis.env'});
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require("./routes");
const app = express();
const host = '0.0.0.0'
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use('/api', routes);

app.listen(port, host, ()=>{
    console.log(`Servidor rodando na porta: ${port}`);
})