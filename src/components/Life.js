import { useEffect, useState } from 'react';

// Phases in react component's lifecycle 
// mounting 
// updating 
// unmounting  

const Life = () => {

    // equivalent to useState()  in class component 
    const [salary, setSalary] = useState(10);

    useEffect(() => {
        console.log('useEffect');
    });

    const increaseSalary = () => {
        setSalary(salary + 10);
    };

    return (
        <div>
            <p>Lifecycle Component</p>
            <p>Salary: {salary} </p>
            <button onClick={increaseSalary} >Click me</button>
        </div>
    );
}

export default Life;


// import React, { Component } from 'react';

// // Phases in react component's lifecycle
// // mounting
// // updating
// // unmounting

// class Life extends Component {

//     constructor(props) {
//         super(props);
//         console.log(this.props);
//         // equivalent to useState() in function component
//         this.state = { salary: 10 };
//     }

//     increaseSalary = () => {
//         this.setState((prevState) => ({
//             salary: prevState.salary + 10
//         }));
//     };

//     componentDidMount() {
//         console.log('componentDidMount');
//     };

//     componentDidUpdate() {
//         console.log('componentDidUpdate');
//     }

//     componentWillUnmount() {
//         console.log('componentWillUnmount');
//     }

//     render() {
//         console.log('render()');
//         return (
//             <div>
//                 <p>Lifecycle Component</p>
//                 <p>Salary: {this.state.salary} </p>
//                 <button onClick={this.increaseSalary} >Click me</button>
//             </div>
//         );
//     }
// }

// export default Life;

