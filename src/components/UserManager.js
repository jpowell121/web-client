import React, { Component } from 'react'
import { connect } from 'react-redux'
import {handleAddUser, handleDeleteUser} from "../actions/users";

class UserManager extends Component {
  state = {
    first_name: '',
    last_name: '',
    email_address: '',
    user_name: '',
  };


  handleChange = (e) => {
    const { id, value }  = e.target;
    this.setState({ [id]: value })
  };

  handleSubmitNewUser = (e) => {
    const { first_name, last_name, email_address, user_name } = this.state;

    e.preventDefault();

    this.props.addUser({
      first_name,
      last_name,
      email_address,
      user_name
    })
  };

  render() {

    const { first_name, last_name, email_address, user_name } = this.state;
    return (
      <div>
        UserManager
        <ul className='user'>
          {this.props.users.map(user =>
            <li key={user.id_users} className='usercard'>
              <span>{user.first_name} {user.last_name} <button onClick={() => { this.props.removeUser(user)}}>Delete</button></span>
              <p>{user.email_address}</p>
              <p>{user.user_name}</p>
            </li>
          )}
        </ul>
        <br/>
        <form onSubmit={this.handleSubmitNewUser} className='user-entry'>
          <p>First name</p>
          <input
            id='first_name'
            type="text"
            placeholder='Enter first name'
            onChange={this.handleChange}
          />
          <p>Last name</p>
          <input
            id='last_name'
            type="text"
            placeholder='Enter last name'
            onChange={this.handleChange}
          />
          <p>Email address</p>
          <input
            id='email_address'
            type="text"
            placeholder='Enter email address'
            onChange={this.handleChange}
          />
          <p>Username</p>
          <input
            id='user_name'
            type="text"
            placeholder='Enter username'
            onChange={this.handleChange}
          />
          <button disabled={ !first_name || !last_name || !email_address || !user_name }>
            Create New User
          </button>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addUser: function (user) {
      dispatch(handleAddUser(user));
    },
    removeUser: function (user) {
      dispatch(handleDeleteUser(user));
    }
  }
}

function mapStateToProps ( {users} ) {
  return {
    users,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserManager)