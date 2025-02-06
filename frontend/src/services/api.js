
import axios from 'axios';
const CommonURL = `http://localhost:4000/api/v1`


export const registerUser = async (userData) => {

    try {
        console.log("userData: ", userData)
        const response = await axios.post(`${CommonURL}/register`, userData)

        return response
    } catch (error) {
        throw error.response.data;
    }
}


export const loginUser = async (userData) => {

    try {
        console.log("userData: ", userData)
        const response = await axios.post(`${CommonURL}/login`, userData)

        return response
    } catch (error) {
        throw error.response.data;
    }
}