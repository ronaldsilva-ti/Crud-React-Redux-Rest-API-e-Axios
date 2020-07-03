import { 
    MOSTRAR_ALERTA,
    OCULTAR_ALERTA
} from '../types';


const INITIAL_STATE = {
    alerta: null
}


export default function(state = INITIAL_STATE,action){
    switch(action.type){
        case MOSTRAR_ALERTA : 
            return {
                ...state,
                alerta:action.payload
            }
        case OCULTAR_ALERTA :
            return{
                ...state,
                alerta:action.payload
            }
        default:
            return state;
    }
    
}