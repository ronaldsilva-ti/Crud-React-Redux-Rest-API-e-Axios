import React from 'react';
import { Link } from 'react-router-dom';

const Produto = ( {produto} ) => {
    const { nome,preco,id  } = produto
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
                >
                    Eliminar
                </button>
            </td>
        </tr>
     );
}
 
export default Produto;