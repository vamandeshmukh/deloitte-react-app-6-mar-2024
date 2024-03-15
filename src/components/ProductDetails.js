const ProductDetails = (props) => {
    const childData = 'Monu';
    const parentDataInChild = props.parentToChild;
    const sendDataToParent = () => {
        console.log(childData);
        props.childToParent(childData);
    };
    return (
        <>
            <h1>ProductDetails - Child Component </h1>
            <p>Parent data in child component: {parentDataInChild}</p>
            <p>Child data in child component: {childData}</p>
            <button onClick={sendDataToParent}>Pass Data to Parent</button>
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

