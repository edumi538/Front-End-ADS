export default class Validator {
  constructor(data) {
    this.data = data;
    this.errors = {
      cnpj: [],
      cpf: [],
      identidade: [],
      inscEstadual: [],
      razaoSocial: [],
      nomeFantasia: [],
      isPessoajuridica: [],
      email: [],
      logradouro: [],
      numero: [],
      complemento: [],
      bairro: [],
      cidade: [],
      estado: [],
      cep: [],
      dd: [],
      numeroTelefone: []
    };
  }

  validatePresence(attr) {

    if(this.data[attr] == ""){
       this.errors[attr].push("Não pode estar em branco");
    }
    return this;
  }
  isValid(){
      let count = Object.keys(this.errors.cnpj).length +
      Object.keys(this.errors.cpf).length +
      Object.keys(this.errors.identidade).length +
      Object.keys(this.errors.inscEstadual).length +
      Object.keys(this.errors.razaoSocial).length +
      Object.keys(this.errors.nomeFantasia).length +
      Object.keys(this.errors.isPessoajuridica).length +
      Object.keys(this.errors.email).length +
      Object.keys(this.errors.logradouro).length +
      Object.keys(this.errors.numero).length +
      Object.keys(this.errors.complemento).length +
      Object.keys(this.errors.bairro).length +
      Object.keys(this.errors.cidade).length +
      Object.keys(this.errors.estado).length +
      Object.keys(this.errors.cep).length +
      Object.keys(this.errors.dd).length +
      Object.keys(this.errors.numeroTelefone).length;
      
      return count == 0;
  }
}
