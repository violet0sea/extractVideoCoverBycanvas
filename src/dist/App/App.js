import React from 'react';
import Header from '../Header/Header';
import './App.scss';

class App extends React.Component {
    constructor(props) {

        super(props);
        this.state={
            test: 0
        };

    }
    render() {

        return (
            <div className="App">
                <Header />
                {this.props.children}
            </div>
        );

    }
}

export default App;