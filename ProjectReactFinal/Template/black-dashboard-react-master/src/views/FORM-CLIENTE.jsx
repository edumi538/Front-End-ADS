
import React from "react";
import ReactDOM from 'react-dom'
import Lista from './LIST-CLIENTE';
import axios from "axios";
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

class Dashboard extends React.Component {
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
      redirect: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async handleSubmit(event) {
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
    await axios.post("http://localhost:3000/cliente", data).then(res=>{
      console.log(res);
    })
  }
  logChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <React.Fragment>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <h5 className="title">Formulario</h5>
              </CardHeader>
              <CardBody>
                <Form onSubmit={this.handleSubmit} method="POST">
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Nome</label>
                        <Input
                          type="text"
                          onChange={this.logChange}
                          className="form-control"
                          name="nomeFantasia"
                          placeholder="Escreva seu nome aqui"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-md-1" md="3">
                      <FormGroup>
                        <label>CNPJ</label>
                        <Input
                          onChange={this.logChange}
                          className="form-control"
                          placeholder="Escreva seu CNPJ aqui"
                          name="cnpj"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="4">
                      <FormGroup>
                        <label htmlFor="exampleInputEmail1">CPF</label>
                        <Input
                          onChange={this.logChange}
                          className="form-control"
                          placeholder="Escreva seu CPF aqui"
                          name="cpf"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="6">
                      <FormGroup>
                        <label>RG</label>
                        <Input
                          onChange={this.logChange}
                          className="form-control"
                          placeholder="Escreva seu RG aqui"
                          name="identidade"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="6">
                      <FormGroup>
                        <label>Inscrição Estadual</label>
                        <Input
                          onChange={this.logChange}
                          className="form-control"
                          placeholder="Escreva sua Inscrição estadual aqui"
                          name="inscEstadual"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Razão Social</label>
                        <Input
                          onChange={this.logChange}
                          className="form-control"
                          placeholder="Escreva sua Razão Social aqui"
                          name="razaoSocial"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="4">
                      <FormGroup>
                        <label>Email</label>
                        <Input
                          onChange={this.logChange}
                          className="form-control"
                          placeholder="Escreva seu Email aqui"
                          name="email"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-md-1" md="4">
                      <FormGroup>
                        <label>Logradouro</label>
                        <Input
                          onChange={this.logChange}
                          className="form-control"
                          placeholder="Escreva seu logradouro aqui"
                          name="logradouro"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="4">
                      <FormGroup>
                        <label>Numero</label>
                        <Input
                          onChange={this.logChange}
                          className="form-control"
                          placeholder="Escreva o numero da sua casa aqui"
                          name="numero"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="8">
                      <FormGroup>
                        <label>Complemento</label>
                        <Input
                          onChange={this.logChange}
                          className="form-control"
                          placeholder="Escreva o complemento do seu endereço aqui"
                          name="complemento"
                        />
                      </FormGroup>
                    </Col>
                    <Col md="8">
                      <FormGroup>
                        <label>Bairro</label>
                        <Input
                          onChange={this.logChange}
                          className="form-control"
                          placeholder="Escreva seu bairro aqui"
                          name="bairro"
                        />
                      </FormGroup>
                    </Col>
                    <Col md="8">
                      <FormGroup>
                        <label>Cidade</label>
                        <Input
                          onChange={this.logChange}
                          className="form-control"
                          placeholder="Escreva o nome da sua cidade aqui"
                          name="cidade"
                        />
                      </FormGroup>
                    </Col>
                    <Col md="8">
                      <FormGroup>
                        <label>Estado</label>
                        <Input
                          onChange={this.logChange}
                          className="form-control"
                          placeholder="Escreva seu estado aqui"
                          name="estado"
                        />
                      </FormGroup>
                    </Col>
                    <FormGroup>
                      <label>CEP</label>
                      <Input
                        onChange={this.logChange}
                        className="form-control"
                        placeholder="Escreva seu CEP aqui"
                        name="cep"
                      />
                    </FormGroup>
                  </Row>
                  <Row>
                    <Col md="8">
                      <FormGroup>
                        <label>DDD</label>
                        <Input
                          onChange={this.logChange}
                          className="form-control"
                          placeholder="Escreva seu DDD aqui"
                          name="dd"
                        />
                      </FormGroup>
                    </Col>
                    <Col md="8">
                      <FormGroup>
                        <label>Numero De Telefone</label>
                        <Input
                          onChange={this.logChange}
                          className="form-control"
                          placeholder="Escreva o número do seu telefone aqui"
                          name="numeroTelefone"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <CardFooter>
                    <Button className="btn-fill" color="primary" type="submit">
                      Save
                    </Button>
                  </CardFooter>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
      <Lista dados={this.state.dados}/>
      </React.Fragment>
    );
  }
}

export default Dashboard;
