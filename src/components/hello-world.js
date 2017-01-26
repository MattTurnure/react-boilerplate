import React, { Component } from 'react';

class HelloWorld extends Component {
    render() {
        let env = typeof process === 'undefined' ? 'World' : process.env.NODE_ENV;

        return (
            <h1>Hello { env }!</h1>
        );
    }
}

export default HelloWorld;