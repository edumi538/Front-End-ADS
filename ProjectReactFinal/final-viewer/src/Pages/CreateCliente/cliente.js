import React, { Component} from 'react';
import { Redirect } from 'react-router';
import { SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import { newClientes, saveClientes, fetchClientes, updateClientes } from '../../Actions/cliente-actions';
import ClienteForm from '../../Components/CompCliente';


class ClienteFormPage extends Component {

  state = {
    redirect: false
  }

  componentDidMount = () => {
    const { _id } = this.props.match.params;
    if(_id){
      this.props.fetchClientes(_id)
    } else {
      this.props.newClientes();
    }
  }

  submit = (CLIENTE) => {
    if(!CLIENTE._id) {
      return this.props.saveClientes(CLIENTE)
        .then(response => this.setState({ redirect:true }))
        .catch(err => {
           throw new SubmissionError(this.props.errors)
         })
    } else {
      return this.props.updateClientes(CLIENTE)
        .then(response => this.setState({ redirect:true }))
        .catch(err => {
           throw new SubmissionError(this.props.errors)
         })
    }
  }

  render() {
    return (
      <div>
        {
          this.state.redirect ?
          <Redirect to="/" /> :
          <ClienteForm cliente={this.props.cliente} loading={this.props.loading} onSubmit={this.submit} />
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    cliente: state.clienteStore.cliente,
    errors: state.clienteStore.errors
  }
}

export default connect(mapStateToProps, {newClientes, saveClientes, fetchClientes, updateClientes})(ClienteFormPage);