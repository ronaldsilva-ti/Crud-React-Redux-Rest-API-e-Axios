import React from 'react';
import { useHistory } from 'react-router-dom';
import  Swal from 'sweetalert2';

//Redux
import { useDispatch } from 'react-redux';
import { eliminarProdutoAction, obterProdutoEditar } from '../actions/produtosActions';

const Produto = ( {produto} ) => {
    const { nome,preco, id  } = produto;
    
    const dispatch = useDispatch();
    const history = useHistory();

    function confirmaEmilinarProduto( id ){

        //perguntar ao usuario
        Swal.fire({
            title: 'Você tem certeza?',
            text: "Você não poderá reverter isso!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim, exclua-o!'
          }).then((result) => {
            if (result.value) {

            //passar para actions
            dispatch( eliminarProdutoAction(id) );

            Swal.fire(
                'Excluido!',
                'Seu arquivo foi deletado.',
                'success'
              )
            }
          })
        }

        const redirecionarEdicao = produto => {
            dispatch( obterProdutoEditar(produto) )
            history.push(`/produtos/editar/${produto.id}`)
        }


    return ( 
        <tr>
            <td>{nome}</td>
            <td><span className="font-weight-bold">$</span>{preco}</td>
            <td className="acoes">
                <button onClick={() => redirecionarEdicao(produto)} className="btn btn-primary mr-2">
                    Editar
                </button>

                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => confirmaEmilinarProduto(id)}
                >
                    Eliminar
                </button>
            </td>
        </tr>
     );
}
 
export default Produto;