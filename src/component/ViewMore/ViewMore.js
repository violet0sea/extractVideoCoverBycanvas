import React from 'react';

class ViewMore extends React.Component {
    constructor(props) {

        super(props);

        this.state={
            data: props.data
        };

        this.handlerClick = this.handlerClick.bind(this);
        this.handlerMouseOver = this.handlerMouseOver.bind(this);

    }
    handlerClick() {

        if(this.handlerClick) {

            this.props.handlerClick(this.state.data.value);
        }
    }
    handlerMouseOver() {

    }
    render() {

        const state = this.state;
        const { style, textContent } = state.data;
        return (
            <div 
                className="viewMore" 
                style={style} 
                onMouseOver={this.handlerMouseOver}
                onClick={this.handlerClick}>
                {textContent}
            </div>
        );

    }
}

export default ViewMore;