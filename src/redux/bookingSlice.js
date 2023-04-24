import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = process.env.REACT_APP_API_URL;

export const fetchVehicles = createAsyncThunk("fetchVehicles", async () => {
    const response = await axios.get(`${BASE_URL}/vehicle`);
    return response.data;
});

export const addTrip = createAsyncThunk("addTrip", async (payload) => {
    try{
        await axios.post(`${BASE_URL}/trip/book`, { ...payload.data }, {
            headers: {
                Authorization: `bearer ${payload.token}`
            }
        });
        const response = await axios.get(`${BASE_URL}/trip`, {
            headers: {
                Authorization: `bearer ${payload.token}`
            }
        });
        return response.data;
    } catch(err){
        console.log("ERROR");
        window.location.href = "/logout";
    }
});

export const fetchTrips = createAsyncThunk("fetchTrips", async(token)=>{
    const response = await axios.get(`${BASE_URL}/trip`, {
        headers: {
            Authorization: `bearer ${token}`
        }
    });
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
        },
        rides: []
    },
    reducers: {
        setTimeSpan: (state, action) => {
            state.pickup.date = action.payload.pickup.date;
            state.pickup.time = action.payload.pickup.time;
            state.dropoff.date = action.payload.dropoff.date;
            state.dropoff.time = action.payload.dropoff.time;
        },
        setCity: (state, action) => {
            state.city = action.payload;
        },
        selectVehicle: (state, action) => {
            state.booking.vehicleInfo = { ...action.payload };
        },
        setAmount: (state, action) => {
            state.amount = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchVehicles.fulfilled, (state, action) => {
            // console.log(action.payload.data);
            state.vehicles = [...action.payload.data];
        });

        builder.addCase(addTrip.fulfilled, (state, action) => {
            state.rides = [...action.payload.data];
        });

        builder.addCase(fetchTrips.fulfilled, (state, action) => {
            state.rides = [...action.payload.data];
        });
    }
});

export const { setTimeSpan, setCity, selectVehicle, setAmount } = bookingSlice.actions;

export default bookingSlice.reducer;