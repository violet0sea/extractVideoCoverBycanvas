import React from 'react';
import ImagesSilde from '../../../component/ImagesSlide/ImagesSilde';

export default class extends React.Component {
    constructor(props) {
        super(props);

    }
    shouldComponentUpdate() {
        return false;
    }
    render() {
        return(
            <div className="Home HomePage_4">
                <div className="page4Header">
                    <h1>{this.props.data.pageFour.heading}</h1>
                    <p>{this.props.data.pageFour.info}</p>
                </div>
                <ImagesSilde />
            </div>

        );
        
    }
}
