import {
  SUBMIT_TASK,
  DELETE_TASK,
  TOGGLE_COMPLETE_TASK,
  GET_TASK,
} from '../actionTypes';

export const actGetTask = (taskId) => {
  return {
    type: GET_TASK,
    payload: {
      taskId,
    },
  };
};

export const actSubmitTask = (task) => {
  return {
    type: SUBMIT_TASK,
    payload: {
      task,
    },
  };
};

export const actDeleteTask = (taskId) => {
  return {
    type: DELETE_TASK,
    payload: {
      taskId,
    },
  };
};

export const actToggleCompleteTask = (taskId) => {
  return {
    type: TOGGLE_COMPLETE_TASK,
    payload: {
      taskId,
    },
  };
};

export const actEditTask = (task) => {
  return {
    type: TOGGLE_COMPLETE_TASK,
    payload: {
      task,
    },
  };
};
