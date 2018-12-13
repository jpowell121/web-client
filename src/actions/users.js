import axios from "axios/index";


export const ADD_USER = 'ADD_USER';
export const REMOVE_USER = 'REMOVE_USER';

function addUser(user) {
  return {
    type: ADD_USER,
    user: user,
  }
}

function removeUser(id_users) {
  return {
    type: REMOVE_USER,
    id_users,
  }
}

// asynch action creators

export function handleAddUser(user) {

  return (dispatch) => {

    // call api to add user
    axios.post('http://localhost:3000/api/users', {
      firstName: user.first_name,
      lastName: user.last_name,
      emailAddress: user.email_address,
      username: user.user_name
    })
      .then(function (response) {
        user.id_users = response.data.id;
        dispatch(addUser(user))
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

export function handleDeleteUser(user) {

  return (dispatch) => {
    // optimistic dispatch
    dispatch(removeUser(user.id_users));
    // call api to delete user
    const apiCall = 'http://localhost:3000/api/users/' + user.email_address;
    axios.delete(apiCall, {
      emailAddress: user.email_address,
    })
      .catch(function (error) {
        // put user back in store if api failed
        dispatch(addUser(user));
        console.log(error);
      });
  }
}
