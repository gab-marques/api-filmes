const { response } = require('express');
const FilmeService = require('../services/FilmeService');

module.exports = {
    buscarTodos: async (req, res)=>{
        
        let json ={
            error:"",
            result:[]
        };
        let filmes = await FilmeService.buscarTodos();
        for (let i in filmes){
            json.result.push({
                titulo: filmes[i].titulo, 
                genero: filmes[i].genero,
                data: filmes[i].data_lançamento, 
                diretor: filmes[i].diretor, 
                atores: filmes[i].lista_atores, 
                imagem: filmes[i].imagem

            });

        }

        res.json(json);
    }, 

    inserirFilme: async (req,res) => {
        let json = {error:'', result:{}};

        let imagem = req.body.imagem;
        let genero = req.body.genero;
        let titulo = req.body.titulo;
        let data_lançamento = req.body.data_lancamento;
        let diretor = req.body.diretor;
        let lista_atores = req.body.lista_atores;

        // let retornoTeste = {
        //     genero: genero,
        //     titulo: titulo,
        //     data_lançamento: data_lançamento,
        //     diretor: diretor,
        //     lista_atores: lista_atores

        // }
       // return res.json(retornoTeste);
        // if(genero){
        //     return res.json(genero);
        // }
        // const genero = req.body.genero;
        if(titulo && data_lançamento){
            let indice = await FilmeService.inserirFilme( genero, titulo, data_lançamento, diretor, lista_atores);
            json.result = {
                genero, 
                titulo, 
                data_lançamento, 
                diretor, 
                lista_atores
            }
        }
        else{
            json.error = 'campos não enviados';
        }
        return res.json(json);
    }, 

    buscarUm: async (req, res)=>{
        let json = {error:'', result:{}};
        
        let codigo = req.params.codigo;
        let filme = await FilmeService.buscarUm(codigo);
        
        if(filme){
            json.result = carro;
            
        }
        res.json(json)
    },

    inserirGenero: async (req,res) => {
       // return res.json(req.params);
        let json = {error:'', result:{}};
        let genero = req.body.genero;
        // if(genero){
        //     return res.json(genero);
        // }
        // const genero = req.body.genero;
        if(genero){
            let indice = await FilmeService.inserirGenero(genero);
            json.result = {
                genero
            }
        }
        else{
            json.error = 'campos não enviados';
        }
        return res.json(json);
    }, 
    buscarGenero: async (req, res)=>{
        
        let json ={
            error:"",
            result:[]
        };
        let genero = await FilmeService.buscarGenero();
        for (let i in genero){
            json.result.push({
                nome: genero[i].genero,
                codigo: genero[i].codigo

            });

        }

        res.json(json);
    }
}