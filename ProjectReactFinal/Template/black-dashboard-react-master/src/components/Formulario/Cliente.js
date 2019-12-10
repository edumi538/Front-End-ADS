import React,{Component} from 'react'
import * as Yup from 'yup';
import axios from 'axios'
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

export default class ClienteFormulario extends React.Component{
constructor(props){
super(props)
this.state = {

  identidade: 0,
  nomeFantasia: '',
  bairro: '',
  cidade: '',
  estado: '',
  cep: 0,
  dd: 0,
  numeroTelefone:0,
  array:[]

}       
}
handleSubmit = () => {

    // Recebendo dados do this.state
    const { identidade , nomeFantasia, bairro, cidade, estado, cep, dd, numeroTelefone } = this.state
    var data = {identidade , nomeFantasia, bairro, cidade, estado ,cep , dd, numeroTelefone }

    axios.post('http://localhost:3000/cliente', data).then(res =>{
      if(res === 200){
        console.log(res.data)
      }
    })

}
logChange = (e) =>{
  this.setState({[e.target.name]: e.target.value
  })
}
render(){
  return (
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
                   <Col>
                       <FormGroup>
                        <label>Nome</label>
                         <Input
                           id="nomeFantasia"
                           type="text"
                           onChange={this.logChange}
                           value={this.state.nomeFantasia}
                           name="nomeFantasia"
                           placeholder="Escreva seu nome aqui"
                         />
                       </FormGroup>
                     </Col>
                    <Col>
                       <FormGroup>
                         <label>RG</label>
                         <Input
                           id="identidade"
                           type="number"
                           onChange={this.logChange}
                           value={this.state.identidade}
                           placeholder="Escreva seu CNPJ aqui"
                          name="identidade"
                         />
                       </FormGroup>
                     </Col>
                 </Row>
                 <Row>
                 <Col>
                       <FormGroup>                         
                         <label>Bairro</label>
                         <Input
                           id="bairro"
                           type="text"
                           onChange={this.logChange}
                           value={this.state.bairro}
                           name="bairro"
                           placeholder="Escreva seu bairro aqui"
                         />
                       </FormGroup>
                     </Col>
                    <Col>
                       <FormGroup>
                         <label>Cidade</label>
                         <Input
                           id="cidade"
                           type="text"
                           onChange={this.logChange}
                           value={this.state.cidade}
                           placeholder="Escreva sua cidade aqui"
                          name="cidade"
                         />
                       </FormGroup>
                     </Col>
                     <Col>
                       <FormGroup>
                         <label>Estado</label>
                         <Input
                           id="estado"
                           type="text"
                           onChange={this.logChange}
                           value={this.state.estado}
                           placeholder="Escreva seu CNPJ aqui"
                          name="estado"
                         />
                       </FormGroup>
                     </Col>
                 </Row>
                 <Row>
                 <Col>
                       <FormGroup>                         
                         <label>CEP</label>
                         <Input
                           id="cep"
                           type="number"
                           onChange={this.logChange}
                           value={this.state.cep}
                           name="cep"
                           placeholder="Escreva seu cep aqui"
                         />
                       </FormGroup>
                     </Col>
                    <Col>
                       <FormGroup>
                         <label>DDD</label>
                         <Input
                           id="dd"
                           type="number"
                           onChange={this.logChange}
                           value={this.state.dd}
                           placeholder="Escreva seu DDD aqui"
                          name="dd"
                         />
                       </FormGroup>
                     </Col>
                     <Col>
                       <FormGroup>
                         <label>Numero de telefone</label>
                         <Input
                           id="numeroTelefone"
                           type="number"
                           onChange={this.logChange}
                           value={this.state.numeroTelefone}
                           placeholder="Escreva seu Numero de telefone aqui"
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
  )
}
  }