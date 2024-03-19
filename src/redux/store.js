
// steps to use redux 
// 0. install redux libraries 
// ,
//     "@reduxjs/toolkit": "2.2.1",
//     "react-redux": "9.1.0"
// 1. Create store 
// 2. Provide store to React app - index.js
// 3. create reducers / slices 
// 4. send data to store 
// 5. Wherever needed, access data from the store 

// reducer ==  
// slice == 

import { configureStore } from "@reduxjs/toolkit";

// const store = configureStore({});

// const store = configureStore({
//     reducer : {}
// });

const store = configureStore({
    reducer: {
        // anyComponent: AnyComponentReducer
    }
});

export default store;


