const Home = () => {

    const friends = [
        { firstName: 'Sonu', lastName: 'Joshi' },
        { firstName: 'Monu', lastName: 'Singh' },
        { firstName: 'Tonu', lastName: 'Reddy' },
        { firstName: 'Ponu', lastName: 'Pande' }
    ];

    return (
        <>
            <h1>Home Component</h1>
            <p>Home component</p>
            {(friends.length > 0) &&
                <div>
                    <h3>My Friends: </h3>
                    {friends.map((friend) => {
                        return (
                            <div key={friend.firstName} >
                                <p>
                                    <span> {friend.firstName}</span>
                                    <span> {friend.lastName}</span>
                                </p>
                            </div>
                        )
                    })}
                </div >
            }
        </>
    );
}

export default Home;


// const Home = () => {

//     // const employee = {
//     //     eid: 101,
//     //     firstName: 'Sonu',
//     //     salary: 10.5
//     // };

//     const friends = [
//         { firstName: 'Sonu', lastName: 'Joshi' },
//         { firstName: 'Monu', lastName: 'Singh' },
//         { firstName: 'Tonu', lastName: 'Reddy' },
//     ];

//     return (
//         <div>
//             <h1>Home Component</h1>
//             <p>Home component</p>
//             {/* <p> {employee.firstName} </p> */}
//             {/* <p> {friends} </p> */}
//             {/* {friends.map((friend) => { return <p> {friend.firstName} </p> })} */}
//             {friends.map((friend) => {
//                 return (
//                     <div key={friend.firstName} >
//                         <p> {friend.firstName} </p>
//                         <p> {friend.lastName} </p>
//                     </div>
//                 )
//             })}
//         </div>
//     );
// }

// export default Home;



// const Home = () => {

//     // return <p>Some stuff</p>

//     // return (
//     // <p>Some stuff</p>
//     // );

//     // return (
//     //     <div>
//     //         <p>Some stuff</p>
//     //         <p>Some stuff</p>
//     //         <p>Some stuff</p>
//     //     </div>
//     // );


//     return (
//         <div>
//             <h1>Home Component</h1>
//             <p>Home component</p>
//         </div>
//     );
// }

// export default Home;

