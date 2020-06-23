//types -> actions
import {
    AGREGAR_PRODUTO,
    AGREGAR_PRODUTO_EXITO,
    AGREGAR_PRODUTO_ERROR,
    COMECAR_CARREGAR_PRODUTOS,
    CARREGAR_PRODUTOS_EXITO,
    CARREGAR_PRODUTOS_ERROR
} from '../types';

import clienteAxios  from '../config/axios';
import Swal from 'sweetalert2';

//criar novos Produtos
export function criarNovoProdutoAction(produto){
    return async(dispatch) => {
        dispatch( agregarProduto() );

        try {

            //inserir na API
           await clienteAxios.post('/produtos', produto)

            //Se tudo sair bem, atualiza o e state
            dispatch( agregarProdutoExito(produto) )
            
            //alerta
            Swal.fire(
                'Pronto!',
                'O produto foi adicionado com sucesso',
                'success'
            )

        } catch (error) {

            console.log(error);

            //se há um erro, atualiza o state
            dispatch( agregarProdutoError(true) );

            //alerta de erro
            Swal.fire({
                icon: 'error',
                title: 'Ops!',
                text: 'Há um erro, tente novamente!'
            });

        }
    }
}

const agregarProduto = () => ({
    type: AGREGAR_PRODUTO,
    payload:true
})

//se o produto guarda na base de dados
const agregarProdutoExito = ( produto ) => ({
    type:AGREGAR_PRODUTO_EXITO,
    payload:produto
})

//se há um erro
const agregarProdutoError = (estado) => ({
    type: AGREGAR_PRODUTO_ERROR,
    payload: estado
})


//Função que carrega os produtos na base de dados
export function obterProdutosAction(){
    return async ( dispatch ) => {
        dispatch( carregarProdutos() );

        try {

           setTimeout(async() => {

             //Busca na API
             const resposta = await clienteAxios.get('/produtos')
             dispatch( carregarProdutosExito(resposta.data) )    

           },1000)

        } catch (error) {
            console.log(error)            
            dispatch( carregarProdutosError() )
        }
    }
}


const carregarProdutos = () => ({
    type: COMECAR_CARREGAR_PRODUTOS,
    payload: true
});

const carregarProdutosExito = (produtos) => ({
    type:CARREGAR_PRODUTOS_EXITO,
    payload:produtos
});

const carregarProdutosError = () => ({
    type:CARREGAR_PRODUTOS_ERROR,
    payload: true
})