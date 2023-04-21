import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// reducers
import userReducer from "./userSlice";
import bookingReducer from "./bookingSlice";

const persisteConfig = {
    key: "royay_brother",
    storage
};

export const store = configureStore({
    reducer: {
        user: persistReducer(persisteConfig, userReducer),
        booking: persistReducer(persisteConfig, bookingReducer),
    },
    middleware: [thunk]
});

export const persistor = persistStore(store);