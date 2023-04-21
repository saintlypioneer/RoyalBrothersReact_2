import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const BASE_URL = process.env.REACT_APP_API_URL;

export const createUser = createAsyncThunk("createUser", async(data)=>{
    const response = await axios.post(`${BASE_URL}/auth/signup`, {...data});
    return response.data;
});

// validateUser
export const validateUser = createAsyncThunk("validateUser", async(data)=>{
    const response = await axios.post(`${BASE_URL}/auth/login`, {...data});
    console.log(response.data);
    return response.data;
});

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
    reducers: {
        logout: (state)=>{
            state.email= "";
            state.name= "";
            state.mobile= "";
            state.credits= 0;
            state.token= "";
            state.isLoading= false;
            state.isError= false;
        }
    },
    extraReducers: (builder)=>{
        // SIGNING-IN
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
            console.log(action);
            state.email= action.payload.data.email;
            state.name= action.payload.data.name;
            state.mobile= action.payload.data.mobile;
            state.credits= action.payload.data.credits;
            state.token= action.payload.token;
            state.isLoading= false;
            state.isError= false;
        });
        builder.addCase(createUser.rejected, (state, action)=>{
            console.log(action);
            state.email= "";
            state.name= "";
            state.mobile= "";
            state.credits= 0;
            state.token= "";
            state.isLoading= false;
            state.isError= true;
        });

        // LOGGIN-IN
        builder.addCase(validateUser.pending, (state, action)=>{
            state.email= "";
            state.name= "";
            state.mobile= "";
            state.credits= 0;
            state.token= "";
            state.isLoading= true;
            state.isError= false;
        });
        builder.addCase(validateUser.fulfilled, (state, action)=>{
            console.log(action);
            state.email= action.payload.data.email;
            state.name= action.payload.data.name;
            state.mobile= action.payload.data.mobile;
            state.credits= action.payload.data.credits;
            state.token= action.payload.token;
            state.isLoading= false;
            state.isError= false;
        });
        builder.addCase(validateUser.rejected, (state, action)=>{
            console.log(action);
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

export const {logout} = userSlice.actions;

export default userSlice.reducer;