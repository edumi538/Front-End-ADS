import React from "react";
import axios from 'axios';
import {
    Form,
    CardFooter,
    Button,
    ButtonGroup,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    Label,
    FormGroup,
    Input,
    Table,
    Row,
    Col,
    UncontrolledTooltip
} from "reactstrap";

export const requestList = (props) =>{

}

export default class Tables extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        // dados: [],
        // cnpj: "",
        // cpf: "",
        // identidade: 0,
        // inscEstadual: "",
        // razaoSocial: "",
        // nomeFantasia: "",
        // isPessoajuridica: 0,
        // email: "",
        // logradouro: "",
        // numero: 0,
        // complemento: "",
        // bairro: "",
        // cidade: "",
        // estado: "",
        // cep: 0,
        // dd: 0,
        // numeroTelefone: 0,
        // dados: [],
        // modalIsOpen: false,
        // msg: "",
        // redirect:false
        }
    }
    async componentDidMount() {
        await axios.get('http://localhost:3000/cliente').then(res =>{
  
          const dados = res.data;
          this.setState({dados});
  
        })
  
        }
              
  render() { 
    return (
        <div className="content">
      <Col md="12">
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
                      <Button
                       className="btn-icon"
                       size="sm"
                       color="success"
                       onClick={() => this.openModal(cliente)}
                       ><i className="fa fa-edit"></i></Button>
                      <Button
                        className="btn-icon" color="danger" size="sm"
                        onClick={() => this.deleteCliente(cliente.idCliente)}
                      >
                        <i className="fa fa-times" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </Col>
      </div>
    );
  }
}
