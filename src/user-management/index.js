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
    editUser: {
      id: '',
      name: '',
      username: '',
      email: '',
      phoneNumber: '',
      type: '',
    },
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

  updateUserHandler = (user) => {
    console.log(user);
  };

  searchByNameHandler = (e) => {
    const searchTerm = e.target.value.trim().toLowerCase();

    this.setState({
      searchTerm,
    });
  };

  onSubmitHandler = (e) => {
    e.preventDefault();

    const updateUserList = [...this.state.userList];

    // console.log(this.state.editUser);
    if (this.state.editUser.id) {
      //update
      const updateUser = this.state.editUser;

      const indexUser = updateUserList.findIndex(
        (user) => user.id === updateUser.id
      );

      if (indexUser === -1) return;

      updateUserList[indexUser] = updateUser;

      this.setState({
        userList: updateUserList,
      });
    } else {
      // create new one
      const newUser = {
        ...this.state.editUser,
        id: Math.random().toString(),
      };

      this.setState({
        userList: [...this.state.userList, newUser],
      });
    }

    this.clearForm();
  };

  onChangeHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value, e.target.name);

    const { name, value } = e.target;

    const updateUser = { ...this.state.editUser };

    updateUser[name] = value;

    this.setState({
      editUser: updateUser,
    });
  };

  clearForm = () => {
    const clearUser = { ...this.state.editUser };
    Object.keys(this.state.editUser).forEach((userKey) => {
      clearUser[userKey] = '';
    });
    this.setState({ editUser: clearUser });
  };

  render() {
    return (
      <div className='container'>
        <h1 className='display-4 text-center my-3'>User Management</h1>

        <div className='d-flex justify-content-between align-items-center'>
          <Search onChange={this.searchByNameHandler} />
          <button
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
          editUser={this.state.editUser}
          onSubmitHandler={this.onSubmitHandler}
          onChangeHandler={this.onChangeHandler}
        />
      </div>
    );
  }
}

export default Home;
