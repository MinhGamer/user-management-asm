import React, { Component } from 'react';
import Search from './Search';
import Users from './Users';
import Modal from './Modal';

const DUMMY_USERS = [
  {
    id: '1',
    name: 'Dinh Phuc Nguyen',
    username: 'dpnguyen',
    email: 'dpnguyen@gmail.com',
    phoneNumber: '1123123213',
    type: 'VIP',
  },
  {
    id: '2',
    name: 'Minh',
    username: 'minhnq',
    email: 'minhnq@gmail.com',
    phoneNumber: '8785123213',
    type: 'VIP',
  },
  {
    id: '3',
    name: 'Thao',
    username: 'thaont',
    email: 'thaont@gmail.com',
    phoneNumber: '5645223213',
    type: 'VIP',
  },
  {
    id: '4',
    name: 'Lam',
    username: 'lamkh',
    email: 'lamkh@gmail.com',
    phoneNumber: '7777123213',
    type: 'VIP',
  },
];
class Home extends Component {
  state = {
    userList: DUMMY_USERS,
    editUser: null,
    searchTerm: '',
  };

  addUserHandler = (user) => {
    this.setState({
      userList: [...this.state.userList, user],
    });
  };

  deleteUserHandler = (userId) => {
    this.setState({
      userList: this.state.userList.filter((user) => user.id !== userId),
    });
  };

  getUserHandler = (userId) => {
    const userIndex = this.state.userList.findIndex(
      (user) => user.id === userId
    );

    if (userIndex === -1) return;

    this.setState({
      editUser: this.state.userList[userIndex],
    });
  };

  updateUserHandler = (updateUser) => {
    const userIndex = this.state.userList.findIndex(
      (user) => user.id === updateUser.id
    );

    if (userIndex === -1) return;

    const updatedUserList = [...this.state.userList];

    updatedUserList[userIndex] = updateUser;

    this.setState({
      userList: updatedUserList,
      editUser: null,
    });
  };

  searchByNameHandler = (e) => {
    const searchTerm = e.target.value.trim().toLowerCase();

    this.setState({
      searchTerm,
    });
  };

  componentDidUpdate() {
    localStorage.setItem('users', JSON.stringify(this.state.userList));
  }

  componentDidMount() {
    const data = JSON.parse(localStorage.getItem('users'));
    this.setState({
      userList: data,
    });
  }

  render() {
    return (
      <div className='container'>
        <h1 className='display-4 text-center my-3'>User Management</h1>

        <div className='d-flex justify-content-between align-items-center'>
          <Search onChange={this.searchByNameHandler} />

          <button
            onClick={() => this.setState({ editUser: null })}
            className='btn btn-success'
            data-toggle='modal'
            data-target='#modelIdUser'>
            Add User
          </button>
        </div>

        <Users
          searchTerm={this.state.searchTerm}
          deleteUserHandler={this.deleteUserHandler}
          getUserHandler={this.getUserHandler}
          userList={this.state.userList}
        />

        {/* add user FORM */}
        <Modal
          addUserHandler={this.addUserHandler}
          editUser={this.state.editUser}
          updateUserHandler={this.updateUserHandler}
        />
      </div>
    );
  }
}

export default Home;
