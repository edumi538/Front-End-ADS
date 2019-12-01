import React, { Component } from "react";
// import Validation from 'react-validation'
import "../form/styles.css";

export default class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idCliente: "",
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
      numeroTelefone: 0
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    var data = {
      idCliente: this.state.idCliente,
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
    fetch("/cliente", {
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
  logChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    return (
      <div className="container register-form">
        <form
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
            <button type="submit" className="btn btn-primary">
              Registrar
            </button>
          </div>
        </form>
      </div>
    );
  }
}
