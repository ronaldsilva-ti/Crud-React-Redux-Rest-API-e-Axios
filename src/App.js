import React from 'react';

//React Router DOM
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';

//Components
import Header from './components/Header';
import Produtos from './components/Produtos';
import NovosProdutos from './components/NovosProdutos';
import EditarProdutos from './components/EditarProdutos';

//Redux
import { Provider } from 'react-redux';
import store from './store'

function App() {
  return (
    <Router>
      <Provider store={store}>
          <Header/>
          <div className="container mt-5">
              <Switch>
                  <Route exact path="/" component={Produtos} />
                  <Route exact path="/produtos/novo" component={NovosProdutos} />
                  <Route exact path="/produtos/editar/:id" component={EditarProdutos} />
              </Switch>
          </div>
      </Provider>            
    </Router>
    
         
  
  );
}

export default App;
