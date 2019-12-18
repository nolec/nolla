import axios from "axios";
import { setAlert } from './alert';

export const getMyProfile = () => async dispatch =>{
    try{
        const res = await axios.get("/api/profile/me");
    }catch(error){

    }
}