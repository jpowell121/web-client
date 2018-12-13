import axios from 'axios'

export const RECEIVE_DATA = 'RECEIVE_DATA';

function receiveData(users) {
  console.log (users);
  return {
    type: RECEIVE_DATA,
    users,
  }
}

export function handleInitialData() {

  return (dispatch) => {
    Promise.all([
      axios.get('http://localhost:3000/api/users')
    ]).then(([s]) => {
      dispatch(receiveData(s['data']['Users']))
    })
  }
}