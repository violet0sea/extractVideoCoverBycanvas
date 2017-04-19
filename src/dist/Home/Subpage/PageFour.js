import React from 'react';
import ImagesSilde from '../../../component/ImagesSlide/ImagesSilde';

export default class extends React.Component {
    constructor(props) {

        super(props);

    }
    shouldComponentUpdate() {

        // todo ImageSile shouldn't be influenced by it's parent state change, which made mess.
        return false;

    }
    render() {
        
        return(
            <div id="product" className="Home HomePage_4">
                <div className="page4Header">
                    <h1>{this.props.data.pageFour.heading}</h1>
                    <p>{this.props.data.pageFour.info}</p>
                </div>
                <ImagesSilde />
            </div>
        );
        
    }
}
