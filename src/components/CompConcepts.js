import { Suspense, lazy } from "react";
import FallbackComponent from "./FallbackComponent";

const LazyComponent = lazy(() => import('./LazyComponent'));


const CompConcepts = () => {
    return (
        <>
            <p>Lazy Suspense Concepts</p>
            <Suspense fallback={FallbackComponent}>
                <p>Lazy...</p>
                <LazyComponent />
            </Suspense>
        </>
    );
}

export default CompConcepts;


// import { useState } from "react";
// import ThemeButton from "../context/ThemeButton";
// import { ThemeProvider } from "../context/ThemeContext";
// import ThemedComponent from "../context/ThemedComponent";

// const CompConcepts = () => {

//     // let someData =  'abc'; // 'def'
//     const [someData, setSomeData] = useState('abc'); // 'def'

//     return (
//         <>
//             <p>Context API Concepts</p>
//             <ThemeProvider>
//                 <p>Some text</p>
//                 <ThemedComponent />
//                 <ThemeButton />
//             </ThemeProvider>
//         </>
//     );
// }

// export default CompConcepts;


// import BootstrapLearning from "./BootstrapLearning";

// const CompConcepts = () => {

//     return (
//         <>
//             <p>Lifecycle Hooks Concepts</p>
//             <BootstrapLearning />
//         </>
//     );
// }

// export default CompConcepts;



// import WrapperComponent from "./WrapperComponent";
// const CompConcepts = () => {


//     return (
//         <>
//             <h1>Wrapper Component Concepts</h1>
//             <WrapperComponent>
//                 <p>This is an example of wrapper compoment.</p>
//             </WrapperComponent>
//         </>
//     );
// }

// export default CompConcepts;


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