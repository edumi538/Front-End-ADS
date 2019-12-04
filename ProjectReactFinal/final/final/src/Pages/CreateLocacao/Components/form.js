import React, { Component } from "react";
import axios from "axios";
import InputMask from "react-input-mask";
export default class FormCliente extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataRetirada: "",
      dataDevolucao: "",
      kmFinal: 0,
      valorCaucao: "",
      valorSeguro: "",
      pagamentoFinal: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async handleSubmit(event) {
    event.preventDefault();
    var data = {
      dataRetirada: this.state.dataRetirada,
      dataDevolucao: this.state.dataDevolucao,
      kmFinal: this.state.kmFinal,
      valorCaucao: this.state.valorCaucao,
      valorSeguro: this.valorSeguro,
      pagamentoFinal: this.state.pagamentoFinal
    };
    const retorno = await axios.post("http://localhost:3000/locacao", data);
    if (retorno.status === 200) {
      this.setState({ dados: [...this.state.dados, data] });
    }
  }
  logChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

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
              Data Retirada
            </label>
            <div className="controls">
              <InputMask
                mask="99/99/99"
                maskChar={null}
                onChange={this.logChange}
                name="dataRetirada"
              />
            </div>
          </div>
          <div className="control-group">
            <label class="control-label" for="inputName">
              Data  dataDevolucao
            </label>
            <InputMask
                mask="99/99/99"
                maskChar={null}
                onChange={this.logChange}
                name="dataDevolucao"
              />
          </div>
          <div className="control-group">
            <label class="control-label" for="inputName">
              Quilometragem Final
            </label>
            <input
              onChange={this.logChange}
              className="form-control"
              name="kmFinal"
            />
          </div>
          <div className="control-group">
            <label class="control-label" for="inputName">
              Caucao
            </label>
            <input
              type="number"
              onChange={this.logChange}
              className="form-control"
              name="valorCaucao"
            />
          </div>
          <div className="control-group">
            <label class="control-label" for="inputName">
              Valor Seguro
            </label>
            <input
              onChange={this.logChange}
              className="form-control"
              name=" valorSeguro"
            />
          </div>
          <div className="control-group">
            <label class="control-label" for="inputName">
            Pagamento Final
            </label>
            <input
              onChange={this.logChange}
              className="form-control"
              name="pagamentoFinal"
            />
          </div>
          <div className="submit-section">
            <button type="submit" className="btn btn-secondary">
              Registrar
            </button>
          </div>
        </form>
      </div>
    );
  }
}
