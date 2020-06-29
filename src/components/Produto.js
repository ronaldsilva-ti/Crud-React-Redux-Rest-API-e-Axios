import React from 'react';
import { Link } from 'react-router-dom';
import  Swal from 'sweetalert2'

//Redux
import { useDispatch } from 'react-redux';
import { eliminarProdutoAction } from '../actions/produtosActions';

const Produto = ( {produto} ) => {
    const { nome,preco, id  } = produto;
    
    const dispatch = useDispatch();

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







    
    return ( 
        <tr>
            <td>{nome}</td>
            <td><span className="font-weight-bold">$</span>{preco}</td>
            <td className="acoes">
                <Link to={`/produtos/editar/${id}`} className="btn btn-primary mr-2">
                    Editar
                </Link>

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