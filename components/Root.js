import React, {Component} from 'react';
// import { render } from 'react-dom';

import fetchSession from '../config';
import VideoPage from './VideoPage/VideoPage';
import Splash from "./Splash/Splash.js"
import DescribePartner from "./DescribePartner/DescribePartner";
import LearningOptions from "./LearningOptions/LearningOptions";


export default class Root extends Component{
    constructor(props){
        super(props)
        this.state = {
            hasCredentials: false
        }
    }
    componentWillMount() {
        fetchSession()
            .then((res) => {
                this.setState({
                    apiKey: res.apiKey,
                    sessionId: res.sessionId,
                    token: res.token,
                    hasCredentials: true
                });
            })
    }

    render(){
        if (!this.state.hasCredentials) {
            return <div>
                    </div>
        }
        return (
            <div>
                <Splash/>
                <VideoPage apiKey={this.state.apiKey} sessionId={this.state.sessionId} token={this.state.token}/>
                {/* <Splash/> */}
                {/* <DescribePartner/> */}
                {/* <LearningOptions/> */}
            </div>
        )
    }
}