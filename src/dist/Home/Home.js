/**
* @Author: haiwang
* @Date:   2017-02-28 11:08:57
* @Email:  violet0sea@163.com
* @Last modified by:   haiwang
* @Last modified time: 2017-03-02 14:11:37
*/



import React from 'react';
import { browserHistory } from 'react-router';
// import videojs from 'video.js';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import request from 'superagent';
import * as action from '../../../action/actionCreate';
import './Home.scss';


class Home extends React.Component {
constructor(props) {

    super(props);
    this.state={

    }
    this.extractVideoCover = this.extractVideoCover.bind(this);
    this.getImgByCanvas = this.getImgByCanvas.bind(this);
    this.upload = this.upload.bind(this);
}
extractVideoCover() {

    const video = this.refs.video;
    const width = video.getBoundingClientRect().width;
    const height = video.getBoundingClientRect().height;
    const canvas = document.querySelector('#videoCover');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, width, height);
    this.canvas = canvas;
}
getImgByCanvas() {
    if(!this.canvas) {
        return;
    }
    const target = document.querySelector('.target');
    const imgData = this.canvas.toDataURL('image/png');
    const w = this.canvas.width;
    const h = this.canvas.height;
    const img = new Image();
    img.width = w;
    img.height = h;
    img.src = imgData;
    target.appendChild(img);
    this.imgData = imgData
    console.log('imgData', imgData)
}
upload() {
    console.log('preparing!', this);
    const host = '设置自己的后端上传地址';
    const params = {
        pic: this.imgData
    }
    request
        .post(`/pic/upload`)
        .withCredentials()
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .send(params)
        .end((err, res) => {
            if (res.body.status == 'succ') {
                const coverUrl = res.body.data.url
                const w = this.canvas.width;
                const h = this.canvas.height;
                const img = new Image();
                img.width = w;
                img.height = h;
                img.src = coverUrl;
                document.querySelector(".HomeContainer").appendChild(img);  
            }
        })
}
render() {        
    return (
        <div className="HomeContainer">

            <h1>Video</h1>
            <div className="videoContainer">
                <video 
                    src={'../../../public/videos/b.mp4'}
                    poster={this.state.coverUrl && coverUrl}
                    className="video-js vjs-default-skin vjs-big-play-centered"
      
                    controls="controls" ref="video"
                    data-setup='{ 
                        "playbackRates":[0.5,1,1.5,2,3,4,5,6],
                        "techOrder": ["html5","flash"] }' 
                    >
                </video>
            </div>

            <h1>Canvas</h1>
            <div >
                <RaisedButton 
                    label="step-1:截取封面" 
                    primary={true} 
                    onTouchTap={this.extractVideoCover}
                />

            </div>

            <canvas id="videoCover">
                Your Browser Did't Support Canvas
            </canvas>

            <h1>Image</h1>
                <RaisedButton 
                        label="STEP-2:生成图片" 
                        primary={true} 
                        onTouchTap={this.getImgByCanvas}
                />
            <div className="target">
            </div>

            <h1>Upload</h1>
            <RaisedButton 
                label="step-3:上传" 
                primary={true} 
                onTouchTap={this.upload}
            />
            <h1>Result</h1>
        </div>
    );
}
}

const mapStateToProps = (state) => {
return {
    initialNews: state.getInitialNews.initialNews,
    pageTwoChoose: state.changeInitialNews  
}

};

const mapDispatchToProps = (dispatch) => ({
actions: bindActionCreators(action, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(Home);
