import React, { Component } from 'react';

class UserItem extends Component {
  render() {
    const { name, username, email, phoneNumber, type } = this.props.user;

    const { deleteUserHandler } = this.props;

    return (
      <tr>
        <td>{name}</td>
        <td>{username}</td>
        <td>{email}</td>
        <td>{phoneNumber}</td>
        <td>{type}</td>
        <td>
          <button
            className='btn btn-info mr-2'
            data-toggle='modal'
            data-target='#modelIdUser'>
            Edit
          </button>
          <button onClick={deleteUserHandler} className='btn btn-danger'>
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default UserItem;
