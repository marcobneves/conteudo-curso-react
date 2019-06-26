import React, { Component } from 'react';

import FormLivro from './FormLivro';
import ListaLivro from './ListaLivro';


export default class TelaLivro extends Component {
    constructor() {
        super();
        this.state = {
            atualizaListaLivro: false
        }
    }

    atualizarLista = () => {
        this.setState({ atualizaListaLivro: true });
    }

    render() {
        return (
            <div>
                <FormLivro atualizarLista={this.atualizarLista} />
                <ListaLivro atualizaListaLivro={this.state.atualizaListaLivro} />
            </div>
        )
    }
}