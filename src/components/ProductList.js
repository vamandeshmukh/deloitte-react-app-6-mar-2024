import { useState } from "react";
import ProductDetails from "./ProductDetails";

const ProductList = () => {

    const parentData = 'Sonu';
    const [childDataInParent, setChildDataInParent] = useState('');


    return (
        <>
            <h1>List of the Products (Parent) </h1>
            <p>Parent data in parent component: {parentData}</p>
            <p>Child data in parent component: {childDataInParent}</p>
            <ProductDetails parentToChild={parentData} abc="def" />
        </>
    );
};

export default ProductList;


// import ProductDetails from "./ProductDetails";

// const ProductList = () => {

//     return (
//         <>
//             <h1>List of the Products</h1>
//             <ProductDetails firstName='Sonu' lastName='Joshi' />
//             <ProductDetails>Monu</ ProductDetails>
//         </>
//     );
// };

// export default ProductList;

// import { useEffect, useState } from "react";
// import ProductDetails from "./ProductDetails";

// const ProductList = () => {

//     const [products, setProducts] = useState('');

//     // useEffect(() =>{}, []);

//     useEffect(() => {

//         fetch('https://dummyjson.com/products')
//             .then(response => response.json())
//             .then((data) => {
//                 console.log(data.products);
//                 setProducts(data.products);
//                 console.log(products);
//             })
//             .catch((error) => {
//                 console.log(error);
//             });
//     }, []);

//     return (
//         <>
//             <h1>List of the Products</h1>
//             <p> {products.length} </p>
//             <ProductDetails firstName='Sonu' lastName='Joshi' />
//         </>
//     );
// };

// export default ProductList;

// import { useState } from "react";

// const ProductList = () => {

//     // let products = []; // not reqiured
//     const [products, setProducts] = useState('');
//     const [cart, setCart] = useState('');

//     fetch('https://dummyjson.com/products')
//         .then(response => response.json())
//         .then((data) => {
//             console.log(data.products);
//             // products = data.products; // does not work
//             setProducts(data.products);
//             console.log(products);
//         })
//         .catch((error) => {
//             console.log(error);
//         });

//     return (
//         <>
//             <h1>List of the Products</h1>
//             <p> {products.length} </p>
//         </>
//     );
// };

// export default ProductList;