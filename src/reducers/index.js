import { CREATE_GRID } from '../actions';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case (CREATE_GRID): {
      const newState = Object.assign({}, state, {
        xWidth: action.xWidth,
        yWidth: action.yWidth,
        grid: action.grid,
      });
      return newState;
    }
    default: {
      return state;
    }
  }
};

export default reducer;
