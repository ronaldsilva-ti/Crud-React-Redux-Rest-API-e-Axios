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
    PRODUTO_ELIMINADO_EXITO
} from '../types';
//cada reducer tem seu proprio state
const INITIAL_STATE = {
    produtos:[],
    error:false,
    loading:false,
    produtosEliminar:null
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
        default:
            return state;
    }
}