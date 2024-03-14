const ProductDetails = (props) => {

    console.log(props);

    const childData = 'Monu';

    return (
        <>
            <h1>ProductDetails Component (Child) </h1>
            <p>Parent data in child component: {props.parentToChild}</p>
            <p>Child data in child component: {childData}</p>
            <button>Pass Data to Parent</button>
        </>
    );
}
export default ProductDetails;


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
