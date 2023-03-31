import axios from "axios"

const URL = 'http://localhost:8000'

export const authenticatesignup = async(data) => {
    try {
        return await axios.post(`${URL}/signup`,data);
    } catch (error) {
        console.log("Error in authentication signup in client site (context) ",error.message);
    }
}

export const payUsingPaytm = async(data) => {
    try{
        let responce = await axios.post(`${URL}/payment`,data);
        return responce.data;
    }
    catch(error){
        console.log("Error While Connecting To paytm ",error.message);
    }
}