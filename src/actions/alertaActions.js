import { 
    MOSTRAR_ALERTA,
    OCULTAR_ALERTA
} from '../types';



export function mostrarAlertaAction(alerta){
    return (dispatch) => {
        dispatch( criarAlerta(alerta) )

        setTimeout (() => {
        
            dispatch( ocultarAlerta() )
                
        }, 2500)
    }
}


const criarAlerta = alerta => ({
    type: MOSTRAR_ALERTA,
    payload:alerta
});

const ocultarAlerta = () => ({
    type: OCULTAR_ALERTA,
    payload: null
})