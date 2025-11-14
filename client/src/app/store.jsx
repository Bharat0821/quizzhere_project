import { configureStore} from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import { authApi } from "@/features/api/authApi";
import rootReducer from "./rootReducer";
export const appStore = configureStore({
    reducer:{
        auth: authReducer,
        [authApi.reducerPath]: authApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware),
});

const initializeApp = async () => {
    appStore.dispatch(authApi.endpoints.loadUser.initiate({},{forceRefetch: true}));
};
initializeApp();