import { reduxAction } from '../base';
import {
  BLUR,
  BRIGHTNESS,
  CONTRAST,
  GRAYSCALE,
  HUEROTATE,
  INVERT,
  OPACITY,
  RESET,
  SATURATE,
  SEPIA
} from './type';

export const changeBrightness = (value) => {
  return (dispatch) => {
    dispatch(reduxAction(BRIGHTNESS, value));
  };
};
export const changeBlur = (value) => {
  return (dispatch) => {
    dispatch(reduxAction(BLUR, value));
  };
};
export const changeContrast = (value) => {
  return (dispatch) => {
    dispatch(reduxAction(CONTRAST, value));
  };
};
export const changeGrayscale = (value) => {
  return (dispatch) => {
    dispatch(reduxAction(GRAYSCALE, value));
  };
};
export const changeInvert = (value) => {
  return (dispatch) => {
    dispatch(reduxAction(INVERT, value));
  };
};
export const changeOpacity = (value) => {
  return (dispatch) => {
    dispatch(reduxAction(OPACITY, value));
  };
};
export const changeSaturate = (value) => {
  return (dispatch) => {
    dispatch(reduxAction(SATURATE, value));
  };
};
export const changeSepia = (value) => {
  return (dispatch) => {
    dispatch(reduxAction(SEPIA, value));
  };
};
export const changehuerotate = (value) => {
  return (dispatch) => {
    dispatch(reduxAction(HUEROTATE, value));
  };
};

export const resetValue = () => {
  return (dispatch) => {
    dispatch(reduxAction(RESET, ''));
  };
};
