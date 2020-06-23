import { combineReducers } from 'redux';
import produtosReducer from './produtosReducer';


export default  combineReducers({
    produtos: produtosReducer
})