import React, { Component } from "react";
import "./styles.css";
import {Redirect} from 'react-router-dom';
import Modal from "react-modal";
export default class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cnpj: "",
      cpf: "",
      identidade: 0,
      inscEstadual: "",
      razaoSocial: "",
      nomeFantasia: "",
      isPessoajuridica: 0,
      email: "",
      logradouro: "",
      numero: 0,
      complemento: "",
      bairro: "",
      cidade: "",
      estado: "",
      cep: 0,
      dd: 0,
      numeroTelefone: 0,
      dados: [],
      modalIsOpen: false,
      msg: "",
      redirect:false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.logChange = this.logChange.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  setRedirect = () =>{
    this.setState({
      redirect:true
    })
  }
  renderRedirect = () =>{
    if(this.state.redirect){
      return <Redirect to='/clientecadastro'/>
    }
  }
  openModal(cliente) {
    this.setState({
      modalIsOpen: true,
      cnpj: cliente.cnpj,
      cpf: cliente.cpf,
      identidade: cliente.identidade,
      inscEstadual: cliente.inscEstadual,
      razaoSocial: cliente.razaoSocial,
      nomeFantasia: cliente.nomeFantasia,
      isPessoajuridica: cliente.isPessoajuridica,
      email: cliente.email,
      logradouro: cliente.logradouro,
      numero: cliente.numero,
      complemento: cliente.complemento,
      bairro: cliente.bairro,
      cidade: cliente.cidade,
      estado: cliente.estado,
      cep: cliente.cep,
      dd: cliente.dd,
      numeroTelefone: cliente.numeroTelefone,
      id: cliente.idCliente
    });
  }
  closeModal() {
    this.setState({
      modalIsOpen: false
    });
  }
  componentDidMount() {
    let self = this;
    fetch("http://localhost:3000/cliente", {
      method: "GET"
    })
      .then(function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(function(data) {
        self.setState({ dados: data });
      })
      .catch(err => {
        console.log("Houve um erro", err);
      });
  }
  handleSubmit(event) {
    event.preventDefault();
    var data = {
      cnpj: this.state.cnpj,
      cpf: this.state.cpf,
      identidade: this.state.identidade,
      inscEstadual: this.state.inscEstadual,
      razaoSocial: this.state.razaoSocial,
      nomeFantasia: this.state.nomeFantasia,
      isPessoajuridica: this.state.isPessoajuridica,
      email: this.state.email,
      logradouro: this.state.logradouro,
      numero: this.state.numero,
      complemento: this.state.complemento,
      bairro: this.state.bairro,
      cidade: this.state.cidade,
      estado: this.state.estado,
      cep: this.state.cep,
      dd: this.state.dd,
      numeroTelefone: this.state.numeroTelefone
    };
    console.log(data);
    fetch("http://localhost:3000/cliente", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
      .then(function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(function(data) {
        console.log(data);
        if (data === "Sucesso!") {
          this.setState({ msg: "Obrigado por se registrar" });
        }
      })
      .catch(function(err) {
        console.log(err);
      });
  }
  logChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleEdit(event) {
    event.preventDefault();
    var data = {
      cnpj: this.state.cnpj,
      cpf: this.state.cpf,
      identidade: this.state.identidade,
      inscEstadual: this.state.inscEstadual,
      razaoSocial: this.state.razaoSocial,
      nomeFantasia: this.state.nomeFantasia,
      isPessoajuridica: this.state.isPessoajuridica,
      email: this.state.email,
      logradouro: this.state.logradouro,
      numero: this.state.numero,
      complemento: this.state.complemento,
      bairro: this.state.bairro,
      cidade: this.state.cidade,
      estado: this.state.estado,
      cep: this.state.cep,
      dd: this.state.dd,
      numeroTelefone: this.state.numeroTelefone,
      id: this.state.idCliente
    };
  
    fetch(`http://localhost:3000/cliente/${this.state.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(function(data) {
        console.log(data);
        if (data === "success") {
          this.setState({
            msg: "Cliente foi editado"
          });
        }
      })
      .catch(function(err) {
        console.log(err);
      });
  }
  render() {
    return (
      <div className="container register-form">
        <form
          action="/clientecadastro"
          className="form-horizontal"
          onSubmit={this.handleSubmit}
          method="POST"
        >
          <div className="control-group">
            <label class="control-label" for="inputName">
              Nome
            </label>
            <div className="controls">
              <input
                type="text"
                onChange={this.logChange}
                className="form-control"
                name="nomeFantasia"
                placeholder="Escreva seu nome aqui"
              />
            </div>
          </div>
          <div className="control-group">
            <label class="control-label" for="inputName">
              CNPJ
            </label>
            <input
              onChange={this.logChange}
              className="form-control"
              placeholder="Escreva seu CNPJ aqui"
              name="cnpj"
            />
          </div>
          <div className="control-group">
            <label class="control-label" for="inputName">
              CPF
            </label>
            <input
              onChange={this.logChange}
              className="form-control"
              placeholder="Escreva seu CPF aqui"
              name="cpf"
            />
          </div>
          <div className="control-group">
            <label class="control-label" for="inputName">
              RG
            </label>
            <input
              onChange={this.logChange}
              className="form-control"
              placeholder="Escreva seu RG aqui"
              name="identidade"
            />
          </div>
          <div className="control-group">
            <label class="control-label" for="inputName">
              Inscrição Estadual
            </label>
            <input
              onChange={this.logChange}
              className="form-control"
              placeholder="Escreva sua Inscrição estadual aqui"
              name="inscEstadual"
            />
          </div>
          <div className="control-group">
            <label class="control-label" for="inputName">
              Razão Social
            </label>
            <input
              onChange={this.logChange}
              className="form-control"
              placeholder="Escreva sua Razão Social aqui"
              name="razaoSocial"
            />
          </div>
          <div className="control-group">
            <label class="control-label" for="inputName">
              Email
            </label>
            <input
              onChange={this.logChange}
              className="form-control"
              placeholder="Escreva seu Email aqui"
              name="email"
            />
          </div>
          <div className="control-group">
            <label class="control-label" for="inputName">
              Logradouro
            </label>
            <input
              onChange={this.logChange}
              className="form-control"
              placeholder="Escreva seu logradouro aqui"
              name="logradouro"
            />
          </div>
          <div className="control-group">
            <label class="control-label" for="inputName">
              Numero
            </label>
            <input
              onChange={this.logChange}
              className="form-control"
              placeholder="Escreva o numero da sua casa aqui"
              name="numero"
            />
          </div>
          <div className="control-group">
            <label class="control-label" for="inputName">
              Complemento
            </label>
            <input
              onChange={this.logChange}
              className="form-control"
              placeholder="Escreva o complemento do seu endereço aqui"
              name="complemento"
            />
          </div>
          <div className="control-group">
            <label class="control-label" for="inputName">
              Bairro
            </label>
            <input
              onChange={this.logChange}
              className="form-control"
              placeholder="Escreva seu bairro aqui"
              name="bairro"
            />
          </div>
          <div className="control-group">
            <label class="control-label" for="inputName">
              Cidade
            </label>
            <input
              onChange={this.logChange}
              className="form-control"
              placeholder="Escreva o nome da sua cidade aqui"
              name="cidade"
            />
          </div>
          <div className="control-group">
            <label class="control-label" for="inputName">
              Estado
            </label>
            <input
              onChange={this.logChange}
              className="form-control"
              placeholder="Escreva seu estado aqui"
              name="estado"
            />
          </div>
          <div className="control-group">
            <label class="control-label" for="inputName">
              CEP
            </label>
            <input
              onChange={this.logChange}
              className="form-control"
              placeholder="Escreva seu CEP aqui"
              name="cep"
            />
          </div>
          <div className="control-group">
            <label class="control-label" for="inputName">
              DDD
            </label>
            <input
              onChange={this.logChange}
              className="form-control"
              placeholder="Escreva seu DDD aqui"
              name="dd"
            />
          </div>
          <div className="control-group">
            <label class="control-label" for="inputName">
              Telefone
            </label>
            <input
              onChange={this.logChange}
              className="form-control"
              placeholder="Escreva o número do seu telefone aqui"
              name="numeroTelefone"
            />
          </div>
          <div className="submit-section">
            <a
              href="/clientecadastro"
              onClick={() => this.handleSubmit}
              className="btn btn-secondary"
            >
              Registrar
            </a>
          </div>
        </form>
        <div className="container">
          <div className="panel panel-default p50 uth-panel">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>CNPJ</th>
                  <th>CPF</th>
                  <th>RG</th>
                  <th>Inscrição Estadual</th>
                  <th>Razão Social</th>
                  <th>Email</th>
                  <th>Logradouro</th>
                  <th>Numero</th>
                  <th>Complemento</th>
                  <th>Bairro</th>
                  <th>Cidade</th>
                  <th>Estado</th>
                  <th>CEP</th>
                  <th>DDD</th>
                  <th>Telefone</th>
                </tr>
              </thead>
              <tbody>
                {this.state.dados.map(cliente => (
                  <tr key={cliente.idCliente}>
                    <td>{cliente.nomeFantasia}</td>
                    <td>{cliente.cnpj}</td>
                    <td>{cliente.cpf}</td>
                    <td>{cliente.identidade}</td>
                    <td>{cliente.inscEstadual}</td>
                    <td>{cliente.razaoSocial}</td>
                    <td>{cliente.email}</td>
                    <td>{cliente.logradouro}</td>
                    <td>{cliente.numero}</td>
                    <td>{cliente.complemento}</td>
                    <td>{cliente.bairro}</td>
                    <td>{cliente.cidade}</td>
                    <td>{cliente.estado}</td>
                    <td>{cliente.cep}</td>
                    <td>{cliente.dd}</td>
                    <td>{cliente.numeroTelefone}</td>
                    <td>
                      <a onClick={() => this.openModal(cliente)}>Editar</a> |{" "}
                      <a
                        href="/clientecadastro"
                        className="btn btn-primary"
                        onClick={() => this.deleteCliente(cliente.idCliente)}
                      >
                        Deletar
                      </a>
                    </td>
                  </tr>
                ))}
                <Modal
                  isOpen={this.state.modalIsOpen}
                  onRequestClose={this.closeModal}
                  contentLabel="Example Modal"
                >
                  <form onSubmit={this.handleEdit} method="PUT">
                    <div className="control-group">
                      <label class="control-label" for="inputName">
                        Nome
                      </label>
                      <div className="controls">
                        <input
                          type="text"
                          value={this.state.nomeFantasia}
                          onChange={this.logChange}
                          className="form-control"
                          name="nomeFantasia"
                          placeholder="Escreva seu nome aqui"
                        />
                      </div>
                    </div>
                    <div className="control-group">
                      <label class="control-label" for="inputName">
                        CNPJ
                      </label>
                      <input
                        onChange={this.logChange}
                        value={this.state.cnpj}
                        className="form-control"
                        placeholder="Escreva seu CNPJ aqui"
                        name="cnpj"
                      />
                    </div>
                    <div className="control-group">
                      <label class="control-label" for="inputName">
                        CPF
                      </label>
                      <input
                        onChange={this.logChange}
                        value={this.state.cpf}
                        className="form-control"
                        placeholder="Escreva seu CPF aqui"
                        name="cpf"
                      />
                    </div>
                    <div className="control-group">
                      <label class="control-label" for="inputName">
                        RG
                      </label>
                      <input
                        onChange={this.logChange}
                        value={this.state.identidade}
                        className="form-control"
                        placeholder="Escreva seu RG aqui"
                        name="identidade"
                      />
                    </div>
                    <div className="control-group">
                      <label class="control-label" for="inputName">
                        Inscrição Estadual
                      </label>
                      <input
                        onChange={this.logChange}
                        value={this.state.inscEstadual}
                        className="form-control"
                        placeholder="Escreva sua Inscrição estadual aqui"
                        name="inscEstadual"
                      />
                    </div>
                    <div className="control-group">
                      <label class="control-label" for="inputName">
                        Razão Social
                      </label>
                      <input
                        onChange={this.logChange}
                        value={this.state.razaoSocial}
                        className="form-control"
                        placeholder="Escreva sua Razão Social aqui"
                        name="razaoSocial"
                      />
                    </div>
                    <div className="control-group">
                      <label class="control-label" for="inputName">
                        Email
                      </label>
                      <input
                        onChange={this.logChange}
                        value={this.state.email}
                        className="form-control"
                        placeholder="Escreva seu Email aqui"
                        name="email"
                      />
                    </div>
                    <div className="control-group">
                      <label class="control-label" for="inputName">
                        Logradouro
                      </label>
                      <input
                        onChange={this.logChange}
                        value={this.state.logradouro}
                        className="form-control"
                        placeholder="Escreva seu logradouro aqui"
                        name="logradouro"
                      />
                    </div>
                    <div className="control-group">
                      <label class="control-label" for="inputName">
                        Numero
                      </label>
                      <input
                        onChange={this.logChange}
                        value={this.state.numero}
                        className="form-control"
                        placeholder="Escreva o numero da sua casa aqui"
                        name="numero"
                      />
                    </div>
                    <div className="control-group">
                      <label class="control-label" for="inputName">
                        Complemento
                      </label>
                      <input
                        onChange={this.logChange}
                        value={this.state.complemento}
                        className="form-control"
                        placeholder="Escreva o complemento do seu endereço aqui"
                        name="complemento"
                      />
                    </div>
                    <div className="control-group">
                      <label class="control-label" for="inputName">
                        Bairro
                      </label>
                      <input
                        onChange={this.logChange}
                        value={this.state.bairro}
                        className="form-control"
                        placeholder="Escreva seu bairro aqui"
                        name="bairro"
                      />
                    </div>
                    <div className="control-group">
                      <label class="control-label" for="inputName">
                        Cidade
                      </label>
                      <input
                        onChange={this.logChange}
                        value={this.state.cidade}
                        className="form-control"
                        placeholder="Escreva o nome da sua cidade aqui"
                        name="cidade"
                      />
                    </div>
                    <div className="control-group">
                      <label class="control-label" for="inputName">
                        Estado
                      </label>
                      <input
                        onChange={this.logChange}
                        value={this.state.estado}
                        className="form-control"
                        placeholder="Escreva seu estado aqui"
                        name="estado"
                      />
                    </div>
                    <div className="control-group">
                      <label class="control-label" for="inputName">
                        CEP
                      </label>
                      <input
                        onChange={this.logChange}
                        value={this.state.cep}
                        className="form-control"
                        placeholder="Escreva seu CEP aqui"
                        name="cep"
                      />
                    </div>
                    <div className="control-group">
                      <label class="control-label" for="inputName">
                        DDD
                      </label>
                      <input
                        onChange={this.logChange}
                        value={this.state.dd}
                        className="form-control"
                        placeholder="Escreva seu DDD aqui"
                        name="dd"
                      />
                    </div>
                    <div className="control-group">
                      <label class="control-label" for="inputName">
                        Telefone
                      </label>
                      <input
                        onChange={this.logChange}
                        value={this.state.numeroTelefone}
                        className="form-control"
                        placeholder="Escreva o número do seu telefone aqui"
                        name="numeroTelefone"
                      />
                    </div>
                    <div className="submit-section">
                      <button
                        type="submit"
                        className="btn btn-primary"
                      >
                        Atualizar
                      </button>
                    </div>
                  </form>
                </Modal>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
  deleteCliente(ClienteId) {
    var data = {
      id: ClienteId
    };
    fetch(`http://localhost:3000/cliente/${ClienteId}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
      .then(function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(function(data) {
        if (data === "success") {
          this.setState({ msg: "O Cliente foi deletado." });
        }
      })
      .catch(function(err) {
        console.log(err);
      });
  }
}
