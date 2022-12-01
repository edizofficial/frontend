import { combineReducers } from 'redux';
import { colorReducer } from './color';
import { filterReducer } from './filter';
import { imageUrlReducer } from './imageUrl';

const appReducer = combineReducers({
  filter: filterReducer,
  imgUrl: imageUrlReducer,
  color: colorReducer
});

const rootReducer = (state, action) => {
  if (action.type === 'RESET') {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

export default rootReducer;
