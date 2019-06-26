import React, { Component } from 'react';

export default class ListaLivro extends Component {

    constructor(props) {
        super(props);
        this.state = {
            livros: []
        }
    }

    componentWillReceiveProps(props) {
        console.log('props', props);
        this.listagem();
    }

    listagem = () => {
        let url = "http://5d123a8084e9060014576aeb.mockapi.io/livro";
        fetch(url).then(resposta => {
            return resposta.json();
        })
            .then(dados => {
                this.setState({ livros: dados })
            })
            .catch(e => {
                console.log('ERRO AO BUSCAR DADOS')
                this.setState({ error: true });
            })
    }

    componentDidMount() {
        this.listagem();
    }

    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Titulo</th>
                        <th scope="col">Preço</th>
                        <th scope="col">Autor</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.livros.map((livro) => {
                            return (
                                <tr key={livro.id}>
                                    <th scope="row">{livro.id}</th>
                                    <td>{livro.titulo}</td>
                                    <td>{livro.preco}</td>
                                    <td>{livro.autor}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        )
    }
}