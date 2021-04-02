import React, { Component } from 'react';

class Modal extends Component {
  constructor(props) {
    super(props);

    this.closeBtn = React.createRef();

    this.state = {
      user: { name: '', username: '', email: '', phoneNumber: '', type: '' },
      isEditUser: false,
    };
  }

  clearForm = (e) => {
    this.setState({
      user: { name: '', username: '', email: '', phoneNumber: '', type: '' },
    });
  };

  onSubmitHandler = (e) => {
    e.preventDefault();

    if (!this.state.isEditUser) {
      //create new user
      const newUser = { ...this.state.user, id: Math.random().toString() };
      this.props.addUserHandler(newUser);
    } else {
      //update user
      this.props.updateUserHandler(this.state.user);
    }

    this.clearForm();
    this.closeBtn.current.click();
  };

  onChangeHandler = (e) => {
    const { name, value } = e.target;
    const updateUser = { ...this.state.user };

    updateUser[name] = value;

    this.setState({
      user: updateUser,
    });
  };

  // componentDidUpdate() {
  //   //binding data to form
  //   if (this.props.editUser && !this.state.isEditUser) {
  //     this.setState({
  //       user: this.props.editUser,
  //       isEditUser: true,
  //     });
  //   }
  // }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.editUser);
    if (nextProps && nextProps.editUser) {
      this.setState({
        user: nextProps.editUser,
      });
    }
  }

  render() {
    return (
      <div
        className='modal fade'
        id='modelIdUser'
        tabIndex={-1}
        role='dialog'
        aria-labelledby='modelTitleId'
        aria-hidden='true'>
        <div className='modal-dialog' role='document'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title'>
                {this.props.editUser ? 'UPDATE' : 'ADD'} USER
              </h5>
              <button
                ref={this.closeBtn}
                type='button'
                className='close'
                data-dismiss='modal'
                aria-label='Close'>
                <span aria-hidden='true'>×</span>
              </button>
            </div>
            <div className='modal-body'>
              {/* form */}
              <form onSubmit={this.onSubmitHandler}>
                {/* username */}
                <div className='form-group'>
                  <label>Username</label>
                  <input
                    name='username'
                    onChange={this.onChangeHandler}
                    type='text'
                    className='form-control'
                    value={this.state.user.username}
                  />
                </div>

                {/* name */}
                <div className='form-group'>
                  <label>Name</label>
                  <input
                    name='name'
                    onChange={this.onChangeHandler}
                    type='text'
                    className='form-control'
                    value={this.state.user.name}
                  />
                </div>

                {/* email */}
                <div className='form-group'>
                  <label>Email</label>
                  <input
                    name='email'
                    onChange={this.onChangeHandler}
                    type='text'
                    className='form-control'
                    value={this.state.user.email}
                  />
                </div>

                {/* phone number */}
                <div className='form-group'>
                  <label>Phone Number</label>
                  <input
                    name='phoneNumber'
                    onChange={this.onChangeHandler}
                    type='text'
                    className='form-control'
                    value={this.state.user.phoneNumber}
                  />
                </div>

                {/* type */}
                <div className='form-group'>
                  <label>Type</label>
                  <select
                    value={this.state.user.type}
                    name='type'
                    onChange={this.onChangeHandler}
                    className='form-control'>
                    <option value='User'>USER</option>
                    <option value='VIP'>VIP</option>
                  </select>
                </div>

                <button type='submit' className='btn btn-success'>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
