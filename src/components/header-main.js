import React, { Component } from 'react';

class HeaderMain extends Component {
    render() {
        let env = typeof process === 'undefined' ? 'World' : process.env.NODE_ENV;

        return (
            <header className="header-main">
                <div className="container">
                    <h1>Heading</h1>
                </div>
            </header>
        );
    }
}

export default HeaderMain;