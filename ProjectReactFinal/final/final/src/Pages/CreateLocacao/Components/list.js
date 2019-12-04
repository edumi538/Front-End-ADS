import React from 'react'
import Modal from  'react-modal'
import axios from 'axios';
import index from './index';
import Registration from './index';
export default class listLocacao extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        dados: []
        }
    }
    async componentDidMount() {
      await axios.get('http://localhost:3000/locacao').then(res =>{

        const dados = res.data;
        this.setState({dados});

      })

      }
    render(){
        return(
            <div className="container">
            <div className="panel panel-default p50 uth-panel">
            <table className="table table-hover">
            <thead>
              <tr>
                <th>Data retirada</th>
                <th>Data Devolucao</th>
                <th>KmFinal</th>
                <th>Valor Caucao</th>
                <th>Valor Seguro</th>
                <th>Pagamento Final</th>
              </tr>
            </thead>
            <tbody>
                
              {this.state.dados.map(locacao => (
                <tr key={Locacao.idLocacao}>
                  <td>{Locacao.dataRetirada}</td>
                  <td>{Locacao.dataDevolucao}</td>
                  <td>{Locacao.kmFinal}</td>
                  <td>{Locacao.valorCaucao}</td>
                  <td>{Locacao.valorSeguro}</td>
                  <td>{Locacao.pagamentoFinal}</td>
                  <td>
                    <a onClick={() => this.openModal(Locacao)}>Editar</a> |{" "}
                    <a
                      className="btn btn-primary"
                      onClick={() => this.deleteLocacao(Locacao.idLocacao)}
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
                      Data Retirada
                    </label>
                    <div className="controls">
                      <input
                        type="text"
                        value={this.state.nomeFantasia}
                        onChange={this.logChange}
                        className="form-control"
                        name="dataRetirada"
                      />
                    </div>
                  </div>
                  <div className="control-group">
                    <label class="control-label" for="inputName">
                      Data Devolucao
                    </label>
                    <input
                      onChange={this.logChange}
                      value={this.state.cnpj}
                      className="form-control"
                      name="dataDevolucao"
                    />
                  </div>
                  <div className="control-group">
                    <label class="control-label" for="inputName">
                      Quilometragem Final
                    </label>
                    <input
                      onChange={this.logChange}
                      value={this.state.cpf}
                      className="form-control"
                      name="kmFinal"
                    />
                  </div>
                  <div className="control-group">
                    <label class="control-label" for="inputName">
                      Valor Caucao
                    </label>
                    <input
                      onChange={this.logChange}
                      value={this.state.identidade}
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
                      value={this.state.inscEstadual}
                      className="form-control"
                      name="valorSeguro"
                    />
                  </div>
                  <div className="control-group">
                    <label class="control-label" for="inputName">
                     Pagamento Final
                    </label>
                    <input
                      onChange={this.logChange}
                      value={this.state.razaoSocial}
                      className="form-control"
                      name="pagamentoFinal"
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
        )
    }
}