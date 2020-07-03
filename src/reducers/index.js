import { combineReducers } from 'redux';
import produtosReducer from './produtosReducer';
import alertaReducer  from './alertaReducer'

export default  combineReducers({
    produtos: produtosReducer,
    alerta: alertaReducer
})