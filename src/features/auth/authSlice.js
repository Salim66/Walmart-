import { createSlice } from "@reduxjs/toolkit";


// create slice
const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: {}
    },
    reducers: {},
    extraReducers: (builder) => {}
});

// export selector

// export action

// export default
export default authSlice.reducer;