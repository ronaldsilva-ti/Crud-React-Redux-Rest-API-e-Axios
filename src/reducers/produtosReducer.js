//types -> actions
import {
    AGREGAR_PRODUTO,
    AGREGAR_PRODUTO_EXITO,
    AGREGAR_PRODUTO_ERROR,
    COMECAR_CARREGAR_PRODUTOS,
    CARREGAR_PRODUTOS_EXITO,
    CARREGAR_PRODUTOS_ERROR,
    OBTER_PRODUTO_ELIMINAR,
    PRODUTO_ELIMINADO_ERROR,
    PRODUTO_ELIMINADO_EXITO,
    OBTER_PRODUTO_EDITAR,
    PRODUTO_EDITADO_EXITO,
    PRODUTO_EDITADO_ERROR
} from '../types';
//cada reducer tem seu proprio state
const INITIAL_STATE = {
    produtos:[],
    error:false,
    loading:false,
    produtosEliminar:null,
    produtosEditar: null
}

export default function(state = INITIAL_STATE, action){
    switch(action.type){
        case COMECAR_CARREGAR_PRODUTOS :
        case AGREGAR_PRODUTO :
            return {
                ...state,
                loading: action.payload
            }
        case AGREGAR_PRODUTO_EXITO :
            return{
                ...state,
                loading:false,
                produtos: [...state.produtos,action.payload]
            }
        case PRODUTO_ELIMINADO_ERROR :
        case CARREGAR_PRODUTOS_ERROR :            
        case AGREGAR_PRODUTO_ERROR :
        case PRODUTO_EDITADO_ERROR :
            return{
                ...state,
                loading:false,
                error: action.payload
            }
        case CARREGAR_PRODUTOS_EXITO :
            return{
                ...state,
                loading:false,
                error:null,
                produtos: action.payload
            }
            
        case OBTER_PRODUTO_ELIMINAR :
            return {
                ...state,
                produtosEliminar: action.payload
            }
        case PRODUTO_ELIMINADO_EXITO :
            return {
                ...state,
                produtos: state.produtos.filter( produto => produto.id !== state.produtosEliminar ),
                produtosEliminar:null
            }    
        case OBTER_PRODUTO_EDITAR :
            return{
                ...state,
                produtosEditar: action.payload
            }
        case PRODUTO_EDITADO_EXITO :
            return{
                ...state,
                produtosEditar:null,
                produtos: state.produtos.map(produto => 
                   produto.id === action.payload.id ? produto = action.payload : produto     
                )
            }
     
        default:
            return state;
    }
}