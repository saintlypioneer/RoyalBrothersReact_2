import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const BASE_URL = process.env.REACT_APP_API_URL;

export const createUser = createAsyncThunk("createUser", async(data)=>{
    const response = await axios.post(`${BASE_URL}/auth/signup`, {...data});
    return response.data;
});

// validateUser

const userSlice = createSlice({
    name: "user",
    initialState: {
        email: "",
        name: "",
        mobile: "",
        credits: 0,
        token: "",
        isLoading: false,
        isError: false
    },
    extraReducers: (builder)=>{
        builder.addCase(createUser.pending, (state, action)=>{
            state.email= "";
            state.name= "";
            state.mobile= "";
            state.credits= 0;
            state.token= "";
            state.isLoading= true;
            state.isError= false;
        });
        builder.addCase(createUser.fulfilled, (state, action)=>{
            state.email= action.email;
            state.name= action.name;
            state.mobile= action.mobile;
            state.credits= action.token;
            state.token= action.token;
            state.isLoading= false;
            state.isError= false;
        });
        builder.addCase(createUser.rejected, (state, action)=>{
            state.email= "";
            state.name= "";
            state.mobile= "";
            state.credits= 0;
            state.token= "";
            state.isLoading= false;
            state.isError= true;
        });
    }
});

export default userSlice.reducer;