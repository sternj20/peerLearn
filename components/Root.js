import React, {Component} from 'react';
// import { render } from 'react-dom';

import config from '../config';
import Splash from "./Splash/Splash.js"
import VideoPage from './VideoPage/VideoPage';

export default class Root extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                {/* <Splash/> */}
                <VideoPage />
            </div>
        )
    }
}