import React, { Component } from 'react';
import UserItem from './UserItem';

class Users extends Component {
  renderUserListTable = () => {
    const { getUserHandler, deleteUserHandler } = this.props;

    return this.props.userList.map((user) => (
      <UserItem
        deleteUserHandler={() => deleteUserHandler(user.id)}
        getUserHandler={() => getUserHandler(user.id)}
        key={user.id}
        user={user}
      />
    ));
  };

  render() {
    return (
      <div>
        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>{this.renderUserListTable()}</tbody>
        </table>
      </div>
    );
  }
}

export default Users;
