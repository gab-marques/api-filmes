/* */
const db = require('../db');
module.exports = {
    buscarTodos: () =>{
        return new Promise((aceito, rejeitado)=>{
            db.query(`SELECT * FROM filme order by codigo desc`, (error, results)=>{
                if(error){rejeitado(error); return;}
                aceito(results);
            });
        });
    }, 

    // buscarUm: (codigo) => {
    //     return new Promise((aceito, rejeitado)=>{

    //         db.query(`SELECT * FROM filme`)
    //     })
    // }
    inserirFilme: (imagem,genero, titulo, data_lançamento, diretor, lista_atores) => {

        return new Promise((aceito, rejeitado)=>{
           
            db.query('INSERT INTO filme (imagem, genero, titulo, data_lançamento, diretor, lista_atores) VALUES (?, ?, ?, ?, ?, ?) ',
            [imagem, genero , titulo , data_lançamento , diretor , lista_atores] ,
            (error, results)=>{
                if(error){rejeitado(error); return 'ERRO NO SQL';}
                aceito(results.inserirFilme);
                
            });
        });
    },
    inserirGenero: (genero) => {
        return new Promise((aceito, rejeitado)=>{
            db.query('INSERT INTO genero (genero) VALUES (?) ',[genero] ,
            (error, results)=>{
                if(error){rejeitado(error); return 'teste';}
                aceito(results.inserirGenero);
                
            });
        });
    },
    buscarGenero: () =>{
        return new Promise((aceito, rejeitado)=>{
            db.query(`SELECT genero, codigo FROM genero`, (error, results)=>{
                if(error){rejeitado(error); return;}
                aceito(results);
            });
        });
    }, 
    
};