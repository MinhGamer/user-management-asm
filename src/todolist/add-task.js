import React, { Component } from 'react';

import { connect } from 'react-redux';

import { actSubmitTask } from '../redux/actionCreators';

class AddTask extends Component {
  state = {
    editTask: {
      id: '',
      task: '',
    },
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.editTask) {
      this.setState({
        editTask: nextProps.editTask,
      });
    }
  }

  handleSubmit = () => {
    this.props.submitTask(this.state.editTask);
    this.setState({
      editTask: {
        id: '',
        task: '',
      },
    });
  };

  render() {
    return (
      <>
        <input
          onChange={(e) =>
            this.setState({
              editTask: {
                ...this.state.editTask,
                task: e.target.value,
              },
            })
          }
          id='newTask'
          type='text'
          placeholder='Enter an activity...'
          value={this.state.editTask.task}
        />
        <button id='addItem'>
          <i className='fa fa-plus' onClick={this.handleSubmit} />
        </button>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    editTask: state.todoListReducer.editTask,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitTask: (task) => dispatch(actSubmitTask(task)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);
