import React from 'react'

export default class formVeiculo extends React.Component{

    render(){
        return(
            <div className="container register-form">
        <form
          action="/veiculocadastro"
          className="form-horizontal"
          onSubmit={this.handleSubmit}
          method="POST"
        >
          <div className="control-group">
            <label class="control-label" for="inputName">
              Placa
            </label>
            <div className="controls">
              <input
                type="text"
                onChange={this.logChange}
                className="form-control"
                name="placa"
              />
            </div>
          </div>
          <div className="control-group">
            <label class="control-label" for="inputName">
              Chassi
            </label>
            <input
              onChange={this.logChange}
              className="form-control"
              name="chassi"
            />
          </div>
          <div className="control-group">
            <label class="control-label" for="inputName">
              Preço de Compra
            </label>
            <input
              onChange={this.logChange}
              className="form-control"
              name="precoCompra"
            />
          </div>
          <div className="control-group">
            <label class="control-label" for="inputName">
              Preço de Venda
            </label>
            <input
              onChange={this.logChange}
              className="form-control"
              name="precoVenda"
            />
          </div>
          <div className="control-group">
            <label class="control-label" for="inputName">
              Numero de Passageiros
            </label>
            <input
              onChange={this.logChange}
              className="form-control"
              name="nPassageiros"
            />
          </div>
          <div className="control-group">
            <label class="control-label" for="inputName">
              Ano de Fabricação
            </label>
            <input
              onChange={this.logChange}
              className="form-control"
              name="anoFabricacao"
            />
          </div>
          <div className="control-group">
            <label class="control-label" for="inputName">
              Ano do Modelo
            </label>
            <input
              onChange={this.logChange}
              className="form-control"
              name="anoModelo"
            />
          </div>
          <div className="control-group">
            <label class="control-label" for="inputName">
              Cavalos de Potencia
            </label>
            <input
              onChange={this.logChange}
              className="form-control"
              name="cvPotencia"
            />
          </div>
          <div className="control-group">
            <label class="control-label" for="inputName">
              Capacidade do Porta Malas
            </label>
            <input
              onChange={this.logChange}
              className="form-control"
              name="capacidadePortaMalas"
            />
          </div>
          <div className="control-group">
            <label class="control-label" for="inputName">
              Quilometragem
            </label>
            <input
              onChange={this.logChange}
              className="form-control"
              name="Km"
            />
          </div>
          <div className="control-group">
            <label class="control-label" for="inputName">
              Situação
            </label>
          </div>
          <div className="submit-section">
            <a
              href="/veiculoveiculo"
              onClick={() => this.handleSubmit}
              className="btn btn-secondary"
            >
              Registrar
            </a>
          </div>
            </form>
        </div>
        )
    }

}