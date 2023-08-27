import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import server from '../../../config/serverPoint.json';
import api from '../../../config/api.json';


// create user
export const createUser = createAsyncThunk("auth/createUser", async (data) => { 
    try {
        const response = await axios.post("http://localhost:5051/api/v1/auth/register", data);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
}); 


// login user
export const loginUser = createAsyncThunk("auth/loginUser", async (data) => {
    try {
        const response = await axios.post("http://localhost:5051/api/v1/auth/login", data);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
}); 