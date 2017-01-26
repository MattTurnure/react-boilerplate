import React, { Component } from 'react';
import HeaderMain from './header-main';
import HelloWorld from './hello-world';

class Main extends Component {
    render() {
        return (
            <div>
                <HeaderMain />
                <HelloWorld />
            </div>
        );
    }
}

export default Main;