import axios from "axios";

const productUrl = 'https://dummyjson.com/products';

// axios syntax 
// axios.get('url')
// .then((resp) => { handle response})
// .catch((err) => { handle error});

const getAllProducts = () => {
    console.log('getAllProducts');
    return axios.get(`${productUrl}?limit=0`);
};

const getProductsWithPagination = (limit, skip) => {
    console.log(limit, skip);
    return axios.get(`${productUrl}?limit=${limit}&skip=${skip}`);
};

const getProductById = (productId) => {
    console.log(productId);
    return axios.get(`${productUrl}/${productId}`);
};

const addProduct = () => { };

// more functions 

export { getAllProducts, getProductsWithPagination, getProductById, addProduct };


// // option 1 to export multiple functions

// const getAllProducts = () => { };

// const getProductById = () => { };

// const addProduct = () => { };

// // more functions

// export { getAllProducts, getProductById, addProduct };

// // // option 2 to export multiple functions

// // export const getAllProducts = () => { };

// // export const getProductById = () => { };

// // export const addProduct = () => { };

// // // more functions 


