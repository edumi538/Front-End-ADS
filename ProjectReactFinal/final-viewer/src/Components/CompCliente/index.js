import React, { Component } from 'react';
import { Form, Grid, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import classnames from 'classnames';

const validate = (values) => {

  if(!values.nomeFantasia) {
    errors.nomeFantasia = {
      message: 'Você necessita entrar com o seu nome'
    }
  }
  if(!values.numeroTelefone) {
    errors.numeroTelefone = {
      message: 'Você necessita entrar com o seu telefone'
    }
  }
  if(!values.email) {
    errors.email = {
      message: 'Você necessita entrar com o seu email'
    }
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = {
      message: 'email inválido'
    }
  }
  return errors;
}

class ClienteForm extends Component {

  componentWillReceiveProps = (nextProps) => { 
    const { cliente } = nextProps;
    if(cliente._id !== this.props.cliente._id) { 
      this.props.initialize(cliente)
    }
  }

  renderField = ({ input, label, type, meta: { touched, error } }) => (
    <Form.Field className={classnames({error:touched && error})}>
      <label>{label}</label>
      <input {...input} placeholder={label} type={type}/>
      {touched && error && <span className="error">{error.message}</span>}
    </Form.Field>
  )

  render() {
    const { handleSubmit, pristine, submitting, loading, cliente } = this.props;
    return (
      <Grid centered columns={2}>
        <Grid.Column>
          <h1 style={{marginTop:"1em"}}>{cliente._id ? 'Editar Cliente' : 'Adicionar Cliente'}</h1>
          <Form onSubmit={handleSubmit} loading={loading}>

            <Field name="nomeFantasia" type="text" component={this.renderField} label="Nome"/>
            <Field name="numeroTelefone" type="text" component={this.renderField} label="Telefone"/>
            <Field name="email" type="text" component={this.renderField} label="Email"/>
            
            <Button primary type='submit' disabled={pristine || submitting}>Salvar</Button>
          </Form>
        </Grid.Column>
      </Grid>
    )
  }}

export default reduxForm({form: 'cliente', validate})(ClienteForm);