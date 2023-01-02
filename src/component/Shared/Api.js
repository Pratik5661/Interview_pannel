import axios from "axios";
 
export const axiosObject = axios.create({baseURL:'http://localhost:3004/api/'})