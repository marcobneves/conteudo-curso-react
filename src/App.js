import React, { Component } from 'react';

export class Menu extends Component {

    render() {
        return (
            <div style={{ paddingBottom: 30 }}>
                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link active" href="/teste">Inicio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/teste">Livros</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/teste">Autores</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export class FormAutor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            email: '',
            senha: ''
        }
    }

    cadastrar = (evento) => {
        //Fazer com que o evente não se propague para o sistema.
        evento.preventDefault();

        let url = "http://5cf87062e3c79f001439ae06.mockapi.io/autor";
        fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nome: this.state.nome, email: this.state.email, senha: this.state.senha })
        }).then(resposta => {
            if (resposta.ok) {
                console.log('CADASTRADO COM SUCESSO')
                this.props.atualizarLista();
                // this.setState({lista:response});
            } else {
                console.log('ERROR AO CADASTRAR');
            }

        }).catch((error) => {
            console.log('ERROR', error);
        })
    }

    setNome = (evento) => {
        this.setState({ nome: evento.target.value });
    }
    setEmail = (evento) => {
        this.setState({ email: evento.target.value });
    }
    setSenha = (evento) => {
        this.setState({ senha: evento.target.value });
    }

    render() {
        return (
            <div style={{ paddingLeft: 15 }}>
                <form>
                    <h3>Cadastro de Autor</h3>
                    <div className="form-group">
                        <label>Nome</label>
                        <input type="text"
                            onChange={this.setNome}
                            value={this.state.nome}
                            className="form-control"
                            placeholder="Informe o nome"
                        />
                    </div>
                    <div className="form-group">
                        <label>E-mail</label>
                        <input type="email"
                            onChange={this.setEmail}
                            value={this.state.email}
                            className="form-control"
                            placeholder="Informe o e-mail"
                        />
                    </div>
                    <div className="form-group">
                        <label>Senha</label>
                        <input type="password"
                            onChange={this.setSenha}
                            value={this.state.senha}
                            className="form-control"
                            placeholder="Senha"
                        />
                    </div>
                    <button type="submit" onClick={this.cadastrar} className="btn btn-primary">Cadastrar</button>
                </form>
            </div>
        )
    }
}

export class ListaAutor extends Component {

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
        let url = "http://5cf87062e3c79f001439ae06.mockapi.io/autor";
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

export class FormLivro extends Component {

    constructor() {
        super();
        this.state = {
            nome: '',
            preco: '',
            autor: '',
            autores: []
        }
    }

    listaAutores = () => {
        let url = "http://5cf87062e3c79f001439ae06.mockapi.io/autor";
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

        let url = "http://5cf87062e3c79f001439ae06.mockapi.io/livro";
        fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nome: this.state.nome, preco: this.state.preco, autor: this.state.autor })
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

    setNome = (evento) => {
        this.setState({ nome: evento.target.value })
    }

    setAutor = (evento) => {
        this.setState({ autor: evento.target.value })
    }

    componentDidMount(){
        this.listaAutores();
    }

    render() {
        return (
            <div style={{ paddingLeft: 15 }}>
                <form>
                    <h3>Cadastro de Livros</h3>
                    <div className="form-group">
                        <label>Nome</label>
                        <input type="text"
                            onChange={this.setNome}
                            value={this.state.nome}
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
                                this.state.autores.map((autor)=>{
                                    return(
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

export class ListaLivro extends Component {

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
        let url = "http://5cf87062e3c79f001439ae06.mockapi.io/livro";
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
                        <th scope="col">Nome</th>
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
                                    <td>{livro.nome}</td>
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

export class TelaAutor extends Component {
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

export class TelaLivro extends Component {
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

function App() {

    return (
        <div className="App">
            <Menu />
            <TelaAutor/>
            <TelaLivro/>

        </div>
    );
}

export default App;
