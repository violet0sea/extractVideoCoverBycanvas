import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as action from '../../../action/actionCreate';
import { Link } from 'react-router';

class SubNav extends React.Component {
    constructor(props) {

        super(props);
        this.handlerMouseOut = this.handlerMouseOut.bind(this);
        this.handlerClick = this.handlerClick.bind(this);

    }
    handlerClick(e) {

        const dom = e.currentTarget;
        const value = dom.getAttribute('data-value');
        this.props.action.changeNav({
            value
        })
    }
    renderChildren(data, hoverValue, parentId) {

        return data.map((d, i) => {
            
            if(parentId === hoverValue) {

                return (<div className='subNavItem'>{d.map((item, i) => {

                    return (<Link key={item.id} 
                                data-id={parentId} 
                                data-value={item.id}
                                to={`${parentId === 'home' ? '' : parentId}`}
                                onClick={this.handlerClick}>
                                <span className={item.sub ? 'subitem' : 'normal'}>{item.name}</span>
                                {item.children ? <SubNav data={item.children} handlerMouseOut={this.handlerMouseOut} hoverValue={hoverValue} parentId={parentId}/> : null}

                        </Link>)

                })}</div>);

            }

        });

    }
    handlerMouseOut(e) {

        const dom = e.currentTarget

        if(e.target === e.currentTarget && this.props.handlerMouseOut) {
             
            this.props.handlerMouseOut();

        }
    }
    render() {

        const { data, parentId, hoverValue } = this.props;

        return(
            <div className='subNav' onMouseOut={this.handlerMouseOut}>{this.renderChildren(data, hoverValue, parentId)}</div>
        );

    }
}

class Nav extends React.Component {
    constructor(props) {

        super(props);
        this.state={
            data: props.data,
            hoverValue: null
        };
        this.handlerMouseOver = this.handlerMouseOver.bind(this);
        this.handlerMouseOut = this.handlerMouseOut.bind(this);

    }
    renderItem(data, hoverValue) {

        return data.map((item, index) => {

            return(
                <li key={item.id}>
                    <a href={`/#${item.id === 'home' ? '' : item.id}`} data-id={item.id}>
                        {item.name}
                        {item.children ? <SubNav data={item.children} handlerMouseOut={this.handlerMouseOut} hoverValue={hoverValue} parentId={item.id} action={this.props.actions}/> : null}
                    </a>
                </li>
            );

        });

    }
    handlerMouseOver(e) {

        const dom = e.target;
        const domNodeName = dom.nodeName;

        if(domNodeName === 'LI' || domNodeName === 'A') {

            const value = dom.getAttribute('data-id');
            this.setState({
                hoverValue: value
            })

        }

    }
    handlerMouseOut(e) {

            this.setState({
                hoverValue: null
            });

    }
    render() {

        const state = this.state;
        const { data, hoverValue } = state;

        return (
            <div className="Nav">
                <ul onMouseOver={this.handlerMouseOver}>
                {this.renderItem(data, hoverValue)}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {};

};

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(action, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(Nav);
