import React, { useState, useEffect } from 'react';
import { editarProdutoAction } from '../actions/produtosActions'

//Redux
import { useDispatch,useSelector } from 'react-redux';


export default function EditarProdutos(){

    const [ produto,guardarProduto ] = useState({
        nome:'',
        preco: ''
    })
    
    const produtosEditar = useSelector(state => state.produtos.produtosEditar);   

    useEffect( () => {

        guardarProduto(produtosEditar)

    },[produtosEditar])
   
    //Ler os dados do Formulario
    const OnchangeFormulario = e => {
        guardarProduto({
            ...produto,
            [e.target.name] : e.target.value
        })
    }
    const { nome, preco, id } = produto;



    function editarProduto(e){   

        e.preventDefault();

         editarProdutoAction()
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
                                name="nome"
                                value={ nome }
                                onChange={OnchangeFormulario}
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
                                onChange={OnchangeFormulario}
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