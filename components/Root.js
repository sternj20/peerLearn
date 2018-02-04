import React, {Component} from 'react';
// import { render } from 'react-dom';

import config from '../config';
import VideoPage from './VideoPage/VideoPage';
import Splash from "./Splash/Splash.js"
import DescribePartner from "./DescribePartner/DescribePartner";
import LearningOptions from "./LearningOptions/LearningOptions";


export default class Root extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <Splash/>
                <VideoPage />
                {/* <Splash/> */}
                {/* <DescribePartner/> */}
                {/* <LearningOptions/> */}
            </div>
        )
    }
}