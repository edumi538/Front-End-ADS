import React, { Component } from "react";
import Formulario from './form'
import Lista  from './list';
import "../../CreateCliente/styles.css";
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
  }
 
  render() {
    return(
    <React.Fragment>
    <Formulario />
    <Lista/>
    </React.Fragment>
    )
  }
  
}
