import React, { Component } from 'react';

// Phases in react component's lifecycle 
// mounting 
// updating 
// unmounting  

class Life extends Component {

    constructor(props) {
        super(props);
        console.log(this.props);
        // equivalent to useState() V 
        this.state = { salary: 10 };
    }

    increaseSalary = () => {
        this.setState((prevState) => ({
            salary: prevState.salary + 10
        }));
    };

    componentDidMount() {
        console.log('componentDidMount');
    };

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {
        console.log('render()');
        return (
            <div>
                <p>Lifecycle Component</p>
                <p>Salary: {this.state.salary} </p>
                <button onClick={this.increaseSalary} >Click me</button>
            </div>
        );
    }
}

export default Life;

