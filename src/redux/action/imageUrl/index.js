import { reduxAction } from "../base"
import { IMG_URL } from "./type"

export const imageUrl=(url)=>{
    return dispatch=>{
        dispatch(reduxAction(IMG_URL,url))
    }
}