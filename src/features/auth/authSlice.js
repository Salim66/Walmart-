import { createSlice } from "@reduxjs/toolkit";
import { createUser } from "./authApiSlice";


// create slice
const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        message: null,
        error: null
    },
    reducers: {
        setMessageEmpty: (state, action) => {
            state.message = null;
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(createUser.rejected, (state, action) => {
            state.error = action.error.message
        })
    }
});

// export selector

// export action
export const { setMessageEmpty } = authSlice.actions;

// export default
export default authSlice.reducer;