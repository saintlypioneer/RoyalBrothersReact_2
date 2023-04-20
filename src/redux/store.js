import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// reducers
import userReducer from "./userSlice";

const persisteConfig = {
    key: "royay_brother",
    storage
};

export const store = configureStore({
    reducer: {
        user: persistReducer(persisteConfig, userReducer),
    },
    middleware: [thunk]
});

export const persistor = persistStore(store);