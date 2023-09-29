import { addimages } from "../reducers/GalleryReducer";
import axios from "../../utils/axios";



export const asyncAddimages = (props) => async (dispatch,getstate) => {
    try {
        const {data} = await axios.get(`/v2/list?page=${props}`);
        dispatch(addimages(data));
    } catch (error) {
        console.log(error)
    }
}