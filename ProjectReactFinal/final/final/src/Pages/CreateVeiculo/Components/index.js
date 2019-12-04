import React, { Component } from "react";
import Select from "react-select";
import Formulario from './form'
import ListaVeiculo from './list'
import PropTypes from "prop-types";
import "../../CreateVeiculo/styles.css";
import { Redirect } from "react-router-dom";
import Modal from "react-modal";
export default class VeiculoRegistration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placa: 0,
      chassi: 0,
      precoCompra: 0,
      precoVenda: 0.0,
      nPassageiros: 0,
      anoFabricacao: "",
      anoModelo: "",
      cvPotencia: 0,
      capacidadePortaMalas: 0,
      Km: 0,
      situacao: PropTypes.oneOf([
        "disponível",
        "locado",
        "manutenção",
        "vendido"
      ]),
      dados: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.logChange = this.logChange.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  openModal(veiculo) {
    this.setState({
      modalIsOpen: true,
      placa: veiculo.placa,
      chassi: veiculo.chassi,
      precoCompra: veiculo.precoCompra,
      precoVenda: veiculo.precoVenda,
      nPassageiros: veiculo.nPassageiros,
      anoFabricacao: veiculo.anoFabricacao,
      anoModelo: veiculo.anoModelo,
      cvPotencia: veiculo.cvPotencia,
      capacidadePortaMalas: veiculo.capacidadePortaMalas,
      Km: veiculo.Km,
      situacao: veiculo.situacao,
      id: veiculo.idVeiculo
    });
  }
  closeModal() {
    this.setState({
      modalIsOpen: false
    });
  }
  componentDidMount() {
    let self = this;
    fetch("http://localhost:3000/veiculo", {
      method: "GET"
    })
      .then(function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(function(data) {
        self.setState({ dados: data });
      })
      .catch(err => {
        console.log("Houve um erro", err);
      });
  }
  handleSubmit(event) {
    event.preventDefault();
    var data = {
      placa: this.state.placa,
      chassi: this.state.chassi,
      precoCompra: this.state.precoCompra,
      precoVenda: this.state.precoVenda,
      nPassageiros: this.state.nPassageiros,
      anoFabricacao: this.state.anoFabricacao,
      anoModelo: this.state.anoModelo,
      cvPotencia: this.state.cvPotencia,
      capacidadePortaMalas: this.state.capacidadePortaMalas,
      Km: this.state.Km,
      situacao: this.state.situacao
    };
    console.log(data);
    fetch("http://localhost:3000/veiculo", {
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
  logChange = e => {
    this.setState({ [e.taprecoCompraet.name]: e.target.value });
  };

  handleEdit(event) {
    event.preventDefault();
    var data = {
      placa: this.state.placa,
      chassi: this.state.chassi,
      precoCompra: this.state.precoCompra,
      precoVenda: this.state.precoVenda,
      nPassageiros: this.state.nPassageiros,
      anoFabricacao: this.state.anoFabricacao,
      anoModelo: this.state.anoModelo,
      cvPotencia: this.state.cvPotencia,
      capacidadePortaMalas: this.state.capacidadePortaMalas,
      Km: this.state.Km,
      situacao: this.state.situacao,
      id: this.state.idVeiculo
    };

    fetch(`http://localhost:3000/veiculo/${this.state.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
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
        if (data === "success") {
          this.setState({
            msg: "veiculo foi editado"
          });
        }
      })
      .catch(function(err) {
        console.log(err);
      });
  }
  render() {
    return (
        <React.Fragment>
          <Formulario/>
          <ListaVeiculo/>
        </React.Fragment>
    )
  }
  deleteveiculo(veiculoId) {
    var data = {
      id: veiculoId
    };
    fetch(`http://localhost:3000/veiculo/${veiculoId}`, {
      method: "DELETE",
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
        if (data === "success") {
          this.setState({ msg: "O veiculo foi deletado." });
        }
      })
      .catch(function(err) {
        console.log(err);
      });
  }
}
