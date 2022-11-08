import { reduxAction } from "../base"
import { BLUR, BRIGHTNESS, CONTRAST, GRAYSCALE, INVERT, OPACITY } from "./type"

export const changeBrightness=(value)=>{
    return dispatch=>{
        dispatch(reduxAction(BRIGHTNESS,value))
    }
}
export const changeBlur=(value)=>{
    return dispatch=>{
        dispatch(reduxAction(BLUR,value))
    }
}
export const changeContrast=(value)=>{
    return dispatch=>{
        dispatch(reduxAction(CONTRAST,value))
    }
}
export const changeGrayscale=(value)=>{
    return dispatch=>{
        dispatch(reduxAction(GRAYSCALE,value))
    }
}
export const changeInvert=(value)=>{
    return dispatch=>{
        dispatch(reduxAction(INVERT,value))
    }
}
export const changeOpacity=(value)=>{
    return dispatch=>{
        dispatch(reduxAction(OPACITY,value))
    }
}