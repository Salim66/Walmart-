import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import server from '../../../config/serverPoint.json';
import api from '../../../config/api.json';


// create user
export const createUser = createAsyncThunk("auth/createUser", async (data) => { 
    const response = await axios.post("http://localhost:5051/api/v1/auth/register", data);
    return response;
}); 