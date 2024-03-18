import WrapperComponent from "./WrapperComponent";

const CompConcepts = () => {


    return (
        <>
            <h1>Wrapper Component Concepts</h1>
            <WrapperComponent>
                This is an example of wrapper compoment.
            </WrapperComponent>
        </>
    );
}

export default CompConcepts;


// import { useState } from "react";

// // controlled component
// const CompConcepts = () => {

//     const [productId, setProductId] = useState('');

//     const handleProductIdInput = (evt) => {
//         setProductId(evt.target.value);
//         console.log(productId);
//     };

//     return (
//         <>
//             <h1>Component Concepts</h1>
//             <div>
//                 <input
//                     type="text"
//                     name="productId"
//                     value={productId}
//                     onChange={handleProductIdInput}
//                     placeholder="Enter product id"
//                     autoFocus
//                     required
//                 />
//             </div>
//             {productId &&
//                 <div>
//                     <p>{productId}</p>
//                 </div>
//             }
//         </>
//     );
// }

// export default CompConcepts;

// import { useRef } from "react";

// uncontrolled component
// const CompConcepts = () => {

//     const inputRef = useRef('');

//     const handleSubmit = (evt) => {
//         evt.preventDefault();
//         const productId = inputRef.current.value;
//         console.log(productId);
//     };

//     return (
//         <>
//             <h1>Component Concepts</h1>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <input
//                         type="text"
//                         name="productId"
//                         ref={inputRef}
//                         placeholder="Enter product id"
//                         autoFocus
//                         required
//                     />
//                 </div>
//                 <div>
//                     <button type="submit">Submit</button>
//                 </div>
//             </form>
//         </>
//     );
// }

// export default CompConcepts;