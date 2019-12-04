import React from "react";
import Modal from 'react-modal';
import axios from 'axios'
export default class listVeiculo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dados: []
    };
  }
 async componentDidMount() {
  const retorno =  await axios.get('http://localhost:3000/veiculo')
  if(retorno === 200){
      const saida = retorno.data;
      this.setState({saida});
  }
  }
  render() {
    return (
      <div className="container">
        <div className="panel panel-default p50 uth-panel">
          <table className="table table-hover">
            <thead>
              <tr>
                <th></th>
                <th>Placa</th>
                <th>Chassi</th>
                <th>Preço de Compra</th>
                <th>Preço de Venda</th>
                <th>Numero de Passageiros</th>
                <th>Ano de Fabricação</th>
                <th>Ano do Modelo</th>
                <th>Cavalos de Potencia</th>
                <th>Capacidade do Porta Malas</th>
                <th>Quilometragem</th>
                <th>Situação</th>
              </tr>
            </thead>
            <tbody>
              {this.state.dados.map(veiculo => (
                <tr key={veiculo.idVeiculo}>
                  <td>{veiculo.placa}</td>
                  <td>{veiculo.chassi}</td>
                  <td>{veiculo.precoCompra}</td>
                  <td>{veiculo.precoVenda}</td>
                  <td>{veiculo.nPassageiros}</td>
                  <td>{veiculo.anoFabricacao}</td>
                  <td>{veiculo.anoModelo}</td>
                  <td>{veiculo.cvPotencia}</td>
                  <td>{veiculo.capacidadePortaMalas}</td>
                  <td>{veiculo.Km}</td>
                  <td>{veiculo.situacao}</td>
                  <td>
                    <a onClick={() => this.openModal(veiculo)}>Editar</a> |{" "}
                    <a
                      href="/veiculocadastro"
                      className="btn btn-primary"
                      onClick={() => this.deleteveiculo(veiculo.idVeiculo)}
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
                      placa
                    </label>
                    <div className="controls">
                      <input
                        type="text"
                        value={this.state.placa}
                        onChange={this.logChange}
                        className="form-control"
                        name="placa"
                        placeholder="Escreva seu nome aqui"
                      />
                    </div>
                  </div>
                  <div className="control-group">
                    <label class="control-label" for="inputName">
                      chassi
                    </label>
                    <input
                      onChange={this.logChange}
                      value={this.state.chassi}
                      className="form-control"
                      placeholder="Escreva seu chassi aqui"
                      name="chassi"
                    />
                  </div>
                  <div className="control-group">
                    <label class="control-label" for="inputName">
                      Preço de Compra
                    </label>
                    <input
                      onChange={this.logChange}
                      value={this.state.precoCompra}
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
                      value={this.state.precoVenda}
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
                      value={this.state.nPassageiros}
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
                      value={this.state.anoFabricacao}
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
                      value={this.state.anoModelo}
                      className="form-control"
                      name="anoModelo"
                    />
                  </div>
                  <div className="control-group">
                    <label class="control-label" for="inputName">
                      Cavalos de Potência
                    </label>
                    <input
                      onChange={this.logChange}
                      value={this.state.cvPotencia}
                      className="form-control"
                      name="cvPotencia"
                    />
                  </div>
                  <div className="control-group">
                    <label class="control-label" for="inputName">
                      Capacidade do porta malas
                    </label>
                    <input
                      onChange={this.logChange}
                      value={this.state.capacidadePortaMalas}
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
                      value={this.state.Km}
                      className="form-control"
                      name="Km"
                    />
                  </div>
                  <div className="control-group">
                    <label class="control-label" for="inputName">
                      Situação
                    </label>
                    <input
                      onChange={this.logChange}
                      value={this.state.situacao}
                      className="form-control"
                      name="situacao"
                    />
                  </div>
                </form>
              </Modal>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
