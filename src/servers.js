/* ler o arquivo de variável de sistema */
require('dotenv').config({path: 'variaveis.env'});
const express = require('express');
const cors = require('cors');
const morgan = require("morgan");
const bodyParser = require('body-parser');

const routes = require("./routes");

const app = express();

const port = process.env.PORT || 3000;

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(routes);
// server.use(bodyParser.urlencoded({extended:false}));
// server.use(bodyParser.json());
/*todos os enrereços das minhas rostas vão ter esse final */
app.use('/api', routes);

app.listen(port, ()=>{
    console.log(`Servidor rodando em: http://localhost:${port}`);
})