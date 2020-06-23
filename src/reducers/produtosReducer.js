//types -> actions
import {
    AGREGAR_PRODUTO,
    AGREGAR_PRODUTO_EXITO,
    AGREGAR_PRODUTO_ERROR,
    COMECAR_CARREGAR_PRODUTOS,
    CARREGAR_PRODUTOS_EXITO,
    CARREGAR_PRODUTOS_ERROR
} from '../types';

//cada reducer tem seu proprio state
const INITIAL_STATE = {
    produtos:[],
    error:false,
    loading:false
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
        default:
            return state;
    }
}