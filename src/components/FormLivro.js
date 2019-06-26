import React, { Component } from 'react';

export default class FormLivro extends Component {

    constructor() {
        super();
        this.state = {
            titulo: '',
            preco: '',
            autor: '',
            autores: []
        }
    }

    listaAutores = () => {
        let url = "http://5d123a8084e9060014576aeb.mockapi.io/autor";
        fetch(url).then(resposta => {
            return resposta.json();
        })
            .then(dados => {
                // console.log('DADOS', dados);
                this.setState({ autores: dados })
            })
            .catch(e => {
                console.log('ERRO AO BUSCAR DADOS')
                this.setState({ error: true });
            })
    }

    cadastrar = (evento) => {
        //Fazer com que o evente não se propague para o sistema.
        evento.preventDefault();

        let url = "http://5d123a8084e9060014576aeb.mockapi.io/livro";
        fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ titulo: this.state.titulo, preco: this.state.preco, autor: this.state.autor })
        }).then(resposta => {
            if (resposta.ok) {
                console.log('CADASTRADO COM SUCESSO')
                this.props.atualizarLista();
            } else {
                console.log('ERROR AO CADASTRAR');
            }

        }).catch((error) => {
            console.log('ERROR', error);
        })
    }

    setPreco = (evento) => {
        this.setState({ preco: evento.target.value })
    }

    setTitulo = (evento) => {
        this.setState({ titulo: evento.target.value })
    }

    setAutor = (evento) => {
        this.setState({ autor: evento.target.value })
    }

    componentDidMount() {
        this.listaAutores();
    }

    render() {
        return (
            <div style={{ paddingLeft: 15 }}>
                <form>
                    <h3>Cadastro de Livros</h3>
                    <div className="form-group">
                        <label>Titulo</label>
                        <input type="text"
                            onChange={this.setTitulo}
                            value={this.state.titulo}
                            className="form-control"
                            placeholder="Informe o titulo" />
                    </div>
                    <div className="form-group">
                        <label>Preço</label>
                        <input type="text"
                            value={this.state.preco}
                            onChange={this.setPreco}
                            className="form-control"
                            placeholder="Informe o preço" />
                    </div>

                    <div className="form-group">
                        <label>Selecione o Autor</label>
                        <select
                            value={this.state.autor}
                            onChange={this.setAutor}
                            className="custom-select"
                        >
                            <option>Selecione...</option>
                            {
                                this.state.autores.map((autor) => {
                                    return (
                                        <option key={autor.id} value={autor.nome}>{autor.nome}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <button type="submit" onClick={this.cadastrar} className="btn btn-primary">Cadastrar</button>
                </form>
            </div>

        )
    }
}