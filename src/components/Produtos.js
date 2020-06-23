import React,{ useEffect } from 'react';

//Redux
import { useDispatch,useSelector } from 'react-redux';
import { obterProdutosAction } from '../actions/produtosActions';
import Produto from './Produto';




export default function Produtos(){

    const dispatch = useDispatch();

    useEffect(() => {

        //Consultar a API
        const carregarProdutos = () => dispatch( obterProdutosAction() )
        carregarProdutos()

    }, []);

    //obter o state
    const produtos  = useSelector( state => state.produtos.produtos )
    const error = useSelector(state => state.produtos.error);
    const carregando = useSelector(state => state.produtos.loading)

    return(
        <>
            <h2 className="text-center my-5">Lista de Produto</h2>

            {
                error ?
                <p className="alert alert-danger text-center font-weight-bold mt-4">
                   Há um erro
                </p>
                : null
            }

            {
                carregando ?
                <p className="text-center font-weight-bold ">Carregando</p>
                : null
            }

            

            <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">Preço</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        produtos.length === 0 ? <p className="font-weight-bold mt-2">Não há produtos</p> : (
                            produtos.map(produto => (

                                <Produto 
                                    key={produto.id}
                                    produto={produto}
                                />
                            ))
                        )
                    }
                    
                </tbody>

            </table>
        </>
    )
}