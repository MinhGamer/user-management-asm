import React, { Component } from 'react';
import UserItem from './UserItem';

class Users extends Component {
  renderUserListTable = () => {
    const {
      userList,
      getUserHandler,
      deleteUserHandler,
      searchTerm,
    } = this.props;
    console.log('User list render', userList);

    //filter by search term
    //then map to render
    return userList
      .filter((user) => user.name.toLowerCase().includes(searchTerm))
      .map((user) => (
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

export default React.memo(Users);
