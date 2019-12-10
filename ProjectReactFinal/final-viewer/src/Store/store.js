import EventEmitter from 'events'
import Validator  from '../lib/Validator'


let _list = {

    items: {},
    index: 0
};

let _form = {

    data: {

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
    numeroTelefone: 0

    },

    errors: {

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

    },

    mode: 'create'

    };

    let _modal = {
        open: false
    }

    const Store = Object.assign({}, EventEmitter.prototype, {

        addCliente: function(data) {
        
        let validator = new Validator(data);

        validator.validatePresence('cnpj')
        validator.validatePresence('cpf')
        validator.validatePresence('identidade')
        validator.validatePresence('inscEstadual')
        validator.validatePresence('razaoSocial')
        validator.validatePresence('nomeFantasia')
        validator.validatePresence('isPessoajuridica')
        validator.validatePresence('email')
        validator.validatePresence('logradouro')
        validator.validatePresence('numero')
        validator.validatePresence('complemento')
        validator.validatePresence('bairro')
        validator.validatePresence('cidade')
        validator.validatePresence('estado')
        validator.validatePresence('cep')
        validator.validatePresence('dd')
        validator.validatePresence('numeroTelefone');

        if(validator.isValid()){
            _list.items[_list.index+=1] = {
                cnpj: data.cnpj,
                cnpj: data.cnpj,
                cnpj: data.cnpj,
                cnpj: data.cnpj,
                cnpj: data.cnpj,
                cnpj: data.cnpj,
                cnpj: data.cnpj,
                cnpj: data.cnpj,
                cnpj: data.cnpj,
                cnpj: data.cnpj,
                cnpj: data.cnpj,
                cnpj: data.cnpj,
            }
        }

        _form.data = {
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
            numeroTelefone: 0
        };
        _form.errors = {

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
        _modal.open = false
        // _form.errors = validator.errors;

        }else{


        }

    })