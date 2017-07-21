import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router, Route,Switch,Link} from 'react-router-dom';
import AutorBox from './Autor';
import LivroBox from './Livro';
import Home from './Home';
import './index.css';

ReactDOM.render((
        <Router>
            <App>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/autor" component={AutorBox}/>
                        <Route path="/livro" component={LivroBox}/>
                    </Switch>
            </App>
        </Router>

), document.getElementById('root'));
