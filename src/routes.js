/* caminhos que tem dentro da apo, as rotas */

const express = require('express');
const router = express.Router();

const FilmeController = require('./controllers/filmecontroller');

/* rotas*/
router.get('/filmes', FilmeController.buscarTodos);

// router.get('/filmes/:codigo', FilmeController.buscarUm);
router.get('/filmes-genero', FilmeController.buscarGenero);
router.post('/inserirGenero', FilmeController.inserirGenero);
router.post('/inserirFilme', FilmeController.inserirFilme );
module.exports = router;