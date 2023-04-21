import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = process.env.REACT_APP_API_URL;

export const fetchVehicles = createAsyncThunk("fetchVehicles", async()=>{
    const response = await axios.get(`${BASE_URL}/vehicle`);
    return response.data;
})

const bookingSlice = createSlice({
    name: "booking",
    initialState: {
        pickup: {
            date: (new Date()).toISOString(),
            time: "00:00"
        },
        dropoff: {
            date: (new Date()).toISOString(),
            time: "00:00"
        },
        city: "",
        vehicles: [],
        amount: 0,
        helmetsCount: 0,
        booking: {
            vehicleInfo: {}
        }
    },
    reducers: {
        setTimeSpan: (state, action)=>{
            state.pickup.date = action.payload.pickup.date;
            state.pickup.time = action.payload.pickup.time;
            state.dropoff.date = action.payload.dropoff.date;
            state.dropoff.time = action.payload.dropoff.time;
        },
        setCity: (state, action) =>{
            state.city = action.payload.city;
        },
        selectVehicle: (state, action)=>{
            state.booking.vehicleInfo= {...action.payload};
        },
        setAmount: (state, action)=>{
            state.amount = action.payload;
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchVehicles.fulfilled, (state, action)=>{
            // console.log(action.payload.data);
            state.vehicles = [...action.payload.data];
        })
    }
});

export const {setTimeSpan, setCity, selectVehicle, setAmount} = bookingSlice.actions;

export default bookingSlice.reducer;