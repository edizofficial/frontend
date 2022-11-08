import { combineReducers } from 'redux';
import { filterReducer } from './filter';
import { imageUrlReducer } from './imageUrl';

const appReducer = combineReducers({
  filter: filterReducer,
  imgUrl:imageUrlReducer
});

const rootReducer = (state, action) => {
  if (action.type === 'RESET') {
    return appReducer(undefined, action)
  }
  return appReducer(state, action);
};

export default rootReducer;
