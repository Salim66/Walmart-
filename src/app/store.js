const { configureStore } = require("@reduxjs/toolkit");


// create redux store
const store = configureStore({
    reducer: {

    },
    devTools: true
});

// export default
export default store;