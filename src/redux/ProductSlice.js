

// const ProductSlice = '';

// const ProductSlice = createSlice({});

// const ProductSlice = createSlice({
//     name: '',
//     initialState: {},
//     reducers: {}
// });

// const ProductSlice = createSlice({
//     name: 'poductList',
//     initialState: {
//         poductListObj: [] // 'this is intial value'
//     },
//     reducers: {
//         // contain setter methods 
//         setProductListObj: () => { }
//     }
// });

import { createSlice } from "@reduxjs/toolkit";

console.log('ProductSlice');

const ProductSlice = createSlice({
    name: 'productList',
    initialState: {
        productListObj: []
    },
    reducers: {
        setProductListObj: (state, action) => {
            console.log(state);
            console.log(action);
            state.poductListObj = action.payload; // payload = data coming from the component 
        }
        // more methods as needed 
    }
});

export const { setProductListObj, /* more methods */ } = ProductSlice.actions;

export default ProductSlice.reducer;




