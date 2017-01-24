import React, { Component } from 'react';

class HelloWorld extends Component {
    render() {
        return (
            <h1>Hello {process.env.NODE_ENV}!</h1>
        );
    }
}

export default HelloWorld;