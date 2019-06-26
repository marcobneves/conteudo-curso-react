import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import TelaAutor from './TelaAutor';
import TelaLivro from './TelaLivro';

class BoasVindas extends Component {
    render() {
        return (
            <div>
                <div className="jumbotron">
                    <h1 className="display-5">Seja bem vindo</h1>
                    <p className="lead">Sistema de controle de livros UEA 2019 Manuas/AM.</p>
                    <hr className="my-4" />
                    <p>Clique no botão abaixo para inicio.</p>
                    <Link className="btn btn-primary btn-lg" to="/livros/">Iniciar</Link>
                </div>

            </div>
        )
    }
}

class TesteComponent extends Component {

    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div>
                parametro: {this.props.match.params.id}
           </div>
        )
    }
}

export default class Menu extends Component {

    render() {
        return (
            <Router>
                <div style={{ paddingBottom: 30 }}>
                    <ul className="nav">
                        <li className="nav-item">
                            <Link className="nav-link active" to='/'>Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/livros/'>Livros</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/autores/'>Autores</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/teste/100'>Teste link</Link>
                        </li>
                    </ul>
                    <Route path='/' exact component={BoasVindas} />
                    <Route path='/livros/' component={TelaLivro} />
                    <Route path='/autores/' component={TelaAutor} />
                    <Route path='/teste/:id' component={TesteComponent} />
                </div>
            </Router>
        )
    }
}