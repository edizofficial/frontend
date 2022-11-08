import { BLUR, BRIGHTNESS, CONTRAST, GRAYSCALE, INVERT, OPACITY } from '../action/filters/type';
import { IMG_URL } from '../action/imageUrl/type';

const initialState = {
  imageUrl:""
};
export const imageUrlReducer = (state = initialState, action) => {
  switch (action.type) {
    case IMG_URL:
      return {
        ...state,
        imageUrl: action.payload,
      };
    default:
      return state;
  }
};
