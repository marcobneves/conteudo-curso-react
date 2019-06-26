import React, { Component } from 'react';
import FormAutor from './FormAutor';
import ListaAutor from './ListaAutor';

export default class TelaAutor extends Component {
    constructor() {
        super();
        this.state = {
            atualizaListaAutor: false
        }
    }

    atualizarLista = () => {
        this.setState({ atualizaListaAutor: true });
    }

    render() {
        return (
            <div>
                <FormAutor atualizarLista={this.atualizarLista} />
                <ListaAutor atualizaListaAutor={this.state.atualizaListaAutor} />
            </div>
        )
    }
}