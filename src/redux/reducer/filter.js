import {
  BLUR,
  BRIGHTNESS,
  CONTRAST,
  GRAYSCALE,
  HUEROTATE,
  INVERT,
  OPACITY,
  SATURATE,
  SEPIA
} from '../action/filters/type';

const initialState = {
  brightness: 100,
  blur: 0,
  contrast: 100,
  grayscale: 0,
  invert: 0,
  opacity: 100,
  saturate: 100,
  sepia: 0,
  huerotate: 0
};
export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case BRIGHTNESS:
      return {
        ...state,
        brightness: action.payload
      };
    case BLUR:
      return {
        ...state,
        blur: action.payload
      };
    case CONTRAST:
      return {
        ...state,
        contrast: action.payload
      };
    case GRAYSCALE:
      return {
        ...state,
        grayscale: action.payload
      };
    case INVERT:
      return {
        ...state,
        invert: action.payload
      };
    case OPACITY:
      return {
        ...state,
        opacity: action.payload
      };
    case SATURATE:
      return {
        ...state,
        saturate: action.payload
      };
    case SEPIA:
      return {
        ...state,
        sepia: action.payload
      };
    case HUEROTATE:
      return {
        ...state,
        huerotate: action.payload
      };
    default:
      return state;
  }
};
