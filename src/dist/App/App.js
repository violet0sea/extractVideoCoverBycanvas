import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as action from '../../../action/actionCreate';
import Header from '../../component/Header/Header';
import sendAjax from '../../utils/sendAjax';
import { getInitialNews } from '../../../public/urlConfig/urlConfig';
import './App.scss';

class App extends React.Component {
    componentDidMount() {

        // initial index.html get page short message informations
        // let json =  sendAjax(getInitialNews,'GET');
        // json.then((data) => {

        //     this.props.actions.getInitialNews({
        //         initialNews: JSON.parse(data).result.initialNews
        //     });

        // });
        

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

const mapStateToProps = (state) => ({
        initialNews: state.getInitialNews.initialNews,  
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(action, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
