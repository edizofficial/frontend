import { reduxAction } from '../base';
import { IMG_URL } from './type';

export const imageUrl = (url, cb) => {
  return (dispatch) => {
    dispatch(reduxAction(IMG_URL, url));
    if (cb) cb();
  };
};
