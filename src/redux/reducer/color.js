import { COLOR } from '../action/color/type';

const initialState = {
  color: 'transparent'
};
export const colorReducer = (state = initialState, action) => {
  switch (action.type) {
    case COLOR:
      return {
        ...state,
        color: action.payload
      };
    default:
      return state;
  }
};
