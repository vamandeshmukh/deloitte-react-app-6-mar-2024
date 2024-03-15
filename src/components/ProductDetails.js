import { useState } from "react";
import { getProductById } from "../services/ProductService";

const ProductDetails = (props) => {

    const [productId, setProductId] = useState('');
    const [product, setProduct] = useState('');

    return (
        <>
            <h1>Product Details - Child Component </h1>
            {product &&
                <div>
                    <p>{product.title}</p>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                </div>
            }
        </>
    );
}

export default ProductDetails;


// import PropTypes from 'react'

// const ProductDetails = (props) => {
//     const childData = 'Monu';
//     const parentDataInChild = props.parentToChild;
//     const sendDataToParent = () => {
//         console.log(childData);
//         props.childToParent(childData);
//     };
//     return (
//         <>
//             <h1>Product Details - Child Component </h1>
//             <p>Parent data in child component: {parentDataInChild}</p>
//             <p>Child data in child component: {childData}</p>
//             <button onClick={sendDataToParent}>Pass Data to Parent</button>
//         </>
//     );

//     ProductDetails.propTypes = {
//         parentToChild: PropTypes.string.isRequired,
//         // anotherField: PropTypes.number.isRequired,
//         // yetAnotherFiend: PropTypes.object.isRequired
//     };

//     ProductDetails.defaultTypes = {
//         parentToChild: 'Tonu'
//     };

// }
// export default ProductDetails;


// const ProductDetails = (props) => {

//     console.log(props);
//     console.log(props.firstName);

//     return (
//         <>
//             <h1>ProductDetails Component</h1>
//             <p> {props.firstName} {props.lastName} </p>
//             <p>{props.children}</p>
//         </>
//     );
// }
// export default ProductDetails;

// const ProductDetails = (props) => {

//     console.log(props);
//     console.log(props.firstName);

//     return (
//         <>
//             <h1>ProductDetails Component</h1>
//             <p> {props.firstName} {props.lastName} </p>
//         </>
//     );
// }
// export default ProductDetails;


