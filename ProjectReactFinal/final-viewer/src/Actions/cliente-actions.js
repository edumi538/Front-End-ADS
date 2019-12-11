import { client } from './';

const url = '/clientes';

export function fetchClientes(){
  return dispatch => {
    dispatch({
      type: 'FETCH_CLIENTES',
      payload: client.get(url)
    })
  }
}

export function newClientes() {
  return dispatch => {
    dispatch({
      type: 'NEW_CLIENTE'
    })
  }
}

export function saveClientes(CLIENTE) {
  return dispatch => {
    return dispatch({
      type: 'SAVE_CLIENTE',
      payload: client.post(url, CLIENTE)
    })
  }
}

export function fetchClientes(_id) {
  return dispatch => {
    return dispatch({
      type: 'FETCH_CLIENTE',
      payload: client.get(`${url}/${_id}`)
    })
  }
}

export function updateClientes(CLIENTE) {
  return dispatch => {
    return dispatch({
      type: 'UPDATE_CLIENTE',
      payload: client.put(`${url}/${CLIENTE.idCliente}`, CLIENTE)
    })
  }
}

export function deleteClientes(_id) {
  return dispatch => {
    return dispatch({
      type: 'DELETE_CLIENTE',
      payload: client.delete(`${url}/${_id}`)
    })
  }
}