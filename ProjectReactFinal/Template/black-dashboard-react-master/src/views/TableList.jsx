/*!

=========================================================
* Black Dashboard React v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";

class Tables extends React.Component {
  render() {
    return (
      <Row>
      <Col lg="12" md="12">
        <Card>
          <CardHeader>
            <CardTitle tag="h4">Simple Table</CardTitle>
          </CardHeader>
          <CardBody>
            <Table className="tablesorter" responsive>
              <thead className="text-primary">
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
                      <a onClick={() => this.openModal(cliente)}>Editar</a>{" "}
                      |{" "}
                      <a
                        href="/clientecadastro"
                        className="btn btn-primary"
                        onClick={() =>
                          this.deleteCliente(cliente.idCliente)
                        }
                      >
                        Deletar
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </Col>
    </Row>
    );
  }
}

export default Tables;
