import React from 'react';
import { editarProdutoAction } from '../actions/produtosActions'

//Redux
import { useDispatch,useSelector } from 'react-redux';


export default function EditarProdutos(){

    const produtos = useSelector(state => state.produtos.produtosEditar) ;
    //caso não exista produtos
    if(!produtos) return null;

    const { nome, preco, id } = produtos;

    function editarProduto(e){   

        e.preventDefault();

        // editarProdutoAction()
    }

    return(
        <div className="row justify-content-center">
        <div className="col-md-8">
            <div className="card">
                <div className="card-body">

                    <h2 className="text-center mb-4 font-weight-bold">
                         Editar  Produto
                    </h2>

                    <form onSubmit={editarProduto}>
                        <div className="form-group">
                            <label>Nome Produto</label>
                            
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="Nome Produto"
                                name="produto"
                                value={ nome }
                            />
                        </div>

                        <div className="form-group">
                            <label>Preço Produto</label>
                            
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="Preço Produto"
                                name="preco"
                                value={ preco }
                            />
                        </div>

                        <button 
                            type="submit"
                            className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                        >
                            Confirmar
                        </button>
                    </form>

                </div>

            </div>

        </div>
    </div>
    )
}