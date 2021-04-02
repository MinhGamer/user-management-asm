import {
  DELETE_TASK,
  GET_TASK,
  SUBMIT_TASK,
  TOGGLE_COMPLETE_TASK,
} from '../actionTypes';

const initialState = {
  todoList: [
    { id: '1', task: 'Eat', isCompleted: true },
    { id: '2', task: 'Sleep', isCompleted: false },
    { id: '3', task: 'Code', isCompleted: true },
    { id: '4', task: 'Bath', isCompleted: true },
    { id: '5', task: 'Bed', isCompleted: false },
    { id: '6', task: 'Game', isCompleted: true },
  ],

  editTask: null,
};

const todoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_TASK: {
      const { task } = action.payload;

      console.log(task);

      const updateList = [...state.todoList];

      //check to see task have id or not
      //if had Id => update
      if (task.id) {
        const index = updateList.findIndex((_task) => _task.id === task.id);

        if (index === -1) {
          return { ...state };
        }

        console.log(index);

        updateList[index] = task;
      }

      //if not have if => create new task
      let newTask;
      if (!task.id) {
        newTask = {
          id: Math.random().toString(),
          task: task.task,
          isCompleted: false,
        };

        updateList.push(newTask);
      }

      return { ...state, todoList: updateList };
    }

    case DELETE_TASK: {
      const { taskId } = action.payload;
      const updateTodoList = [...state.todoList];

      const index = state.todoList.findIndex((task) => task.id === taskId);

      if (index === -1) {
        return { ...state };
      }

      updateTodoList.splice(index, 1);

      return { ...state, todoList: updateTodoList };
    }

    case TOGGLE_COMPLETE_TASK: {
      // console.log('CHECK', action.payload);
      const { taskId } = action.payload;
      const updateTodoList = [...state.todoList];

      const index = state.todoList.findIndex((task) => task.id === taskId);

      if (index === -1) {
        return { ...state };
      }

      updateTodoList[index].isCompleted = !updateTodoList[index].isCompleted;

      return { ...state, todoList: updateTodoList };
    }

    case GET_TASK: {
      const { taskId } = action.payload;

      const index = state.todoList.findIndex((task) => task.id === taskId);

      if (index === -1) {
        return { ...state };
      }

      return { ...state, editTask: state.todoList[index] };
    }

    default:
      return { ...state };
  }
};

export default todoListReducer;
