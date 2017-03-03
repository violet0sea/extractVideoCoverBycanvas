import React from 'react';
// import { DatePicker } from 'antd';
import Header from '../Header/Header';
import './App.scss';

// console.log('antd', DatePicker)
class App extends React.Component {
    constructor(props) {

        super(props);
        this.state={};

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