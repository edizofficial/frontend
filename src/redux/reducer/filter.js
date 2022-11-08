import { BLUR, BRIGHTNESS, CONTRAST, GRAYSCALE, INVERT, OPACITY } from '../action/filters/type';

const initialState = {
  brightness: 100,
  blur:0,
  contrast:100,
  grayscale:0,
  invert:0,
  opacity:100
};
export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case BRIGHTNESS:
      return {
        ...state,
        brightness: action.payload,
      };
      case BLUR:
        return {
          ...state,
          blur: action.payload,
        };
        case CONTRAST:
          return {
            ...state,
            contrast: action.payload,
          };
          case GRAYSCALE:
          return {
            ...state,
            grayscale: action.payload,
          };
          case INVERT:
            return {
              ...state,
              invert: action.payload,
            };
            case OPACITY:
              return {
                ...state,
                opacity: action.payload,
              };
    default:
      return state;
  }
};
