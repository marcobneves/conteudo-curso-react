import React, { Component } from 'react';

export default class ListaAutor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            autores: []
        }
    }

    componentWillReceiveProps(props) {
        console.log('props', props);
        this.listagem();
    }

    listagem() {
        let url = "http://5d123a8084e9060014576aeb.mockapi.io/autor";
        fetch(url).then(resposta => {
            return resposta.json();
        })
            .then(dados => {
                console.log('DADOS', dados);
                this.setState({ autores: dados })
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
                        <th scope="col">Nome</th>
                        <th scope="col">E-mail</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.autores.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.nome}</td>
                                    <td>{item.email}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        )
    }
}
