import React,{ useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


//Actions de Redux
import { criarNovoProdutoAction } from '../actions/produtosActions';
import { mostrarAlertaAction } from '../actions/alertaActions'

export default function NovosProdutos({ history }) {

    //state do componente
    const [nome,guardarNome] = useState('');
    const [preco, guardarPreco] = useState(0)


    //utilizar useDispatch e cria uma função
    const dispatch = useDispatch()

    //Acessar o state do store
    const carregando = useSelector(state => state.produtos.loading);
    const erro = useSelector(state => state.produtos.error);
    const alertaError = useSelector(state => state.alerta.alerta);
    console.log(erro)


    //manda chamar a ação de produtosAction
    const agregarProduto = (produto) => dispatch( criarNovoProdutoAction(produto))

    
    //quando o usuario clica para enviar formulario
    const submitNovoProduto = e => {
        e.preventDefault();

        //validar formulario
        if(nome.trim() === '' || preco <= 0 ){

            const alerta = {
                msg: 'Os campos são obrigatorios',
                classes: 'alert alert-danger text-center text-uppercase p3 mt-2'
            }

            dispatch( mostrarAlertaAction( alerta ) )         

            return;
        }

        //se não há erros


        //criar um novo produto
        agregarProduto({
            nome,
            preco
        });

        history.push('/');
    }

    return(

        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Inserir Novo Produto
                        </h2>

                        <form 
                            onSubmit={submitNovoProduto}
                        >
                            <div className="form-group">
                                <label>Nome Produto</label>
                                
                                <input 
                                        type="text"
                                        className="form-control"
                                        placeholder="Nome Produto"
                                        name="produto"
                                        value={nome}
                                        onChange={e => guardarNome(e.target.value)}
                                />
                            </div>

                            <div className="form-group">
                                <label>Preço Produto</label>
                                
                                <input 
                                        type="text"
                                        className="form-control"
                                        placeholder="Preço Produto"
                                        name="preco"
                                        value={preco}
                                        onChange={e => guardarPreco(Number(e.target.value))}
                                />
                            </div>

                            <button 
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >
                                Inserir  Produto
                            </button>
                        </form>

                        { carregando ? <p>Carregando..</p> : null }
                        { erro ? <p className="alert alert-danger text-center mt-2">Há um erro</p> : null }
                        {alertaError ? <p className={alertaError.classes}>{alertaError.msg}</p> : null }
                    </div>

                </div>

            </div>
        </div>
    )
}