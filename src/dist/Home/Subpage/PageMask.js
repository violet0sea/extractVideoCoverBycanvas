import React from 'react';

export default function(props) {

    return(
        {
            props.showMask
            ? <div className="Home_mask">1</div>
            : null
        }
    ) 
}


                { showMask ? <div className="Home_clipPath"></div> : null }
                { showMask 
                ? (
                    <div className="Home_mask">                    
                        <div className="H_letter">
                            <div className="HAnimation H_left"></div>
                            <div className="HAnimation H_middle"></div>
                            <div className="HAnimation H_right"></div>
                        </div>
                        <div className="description">
                            <div className="description_top">
                                <p>{data.mask.description.p1}</p>
                                <p>{data.mask.description.p2}</p>
                            </div>
                            <p className="description_middle">{data.mask.description.p3}</p>
                            <div className="description_bottom">
                               <p>{data.mask.description.p4}</p>
                               <p>{data.mask.description.p5}</p>
                               <p>{data.mask.description.p6}</p>
                               <p>{data.mask.description.p7}</p>
                               <p>{data.mask.description.p8}</p> 
                            </div>

                        </div>
                    </div>
                  )
                : null
                }