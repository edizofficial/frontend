import { reduxAction } from '../base';
import { COLOR } from './type';

export const updateColor = (color) => {
  return (dispatch) => {
    dispatch(reduxAction(COLOR, color));
  };
};
