import React, {Component} from 'react';
// import { render } from 'react-dom';

import config from '../config';
<<<<<<< Updated upstream
import Splash from "./Splash/Splash.js"
import VideoPage from './VideoPage/VideoPage';
=======
import Splash from "./Splash/Splash.js";
import DescribePartner from "./DescribePartner/DescribePartner";
import LearningOptions from "./LearningOptions/LearningOptions";
>>>>>>> Stashed changes
import Video from './video_components/Video';
import LearningOptions from './LearningOptions/LearningOptions';
import DescribePartner from "./DescribePartner/DescribePartner";

export default class Root extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
<<<<<<< Updated upstream
                <Splash/>
                <VideoPage />
=======
                {/* <Splash/> */}
                {/* <DescribePartner/> */}
                <LearningOptions/>
                {/* <Video
                    apiKey={config.API_KEY}
                    sessionId={config.SESSION_ID}
                    token={config.TOKEN}
                    loadingDelegate={<div>Loading...</div>}
                    opentokClientUrl="https://static.opentok.com/v2/js/opentok.min.js"
                /> */}
>>>>>>> Stashed changes
            </div>
        )
    }
}