import React, {Component} from 'react';
// import { render } from 'react-dom';

import config from '../config';
import Video from './video_components/Video';

export default class Root extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                Test2
                <Video
                    apiKey={config.API_KEY}
                    sessionId={config.SESSION_ID}
                    token={config.TOKEN}
                    loadingDelegate={<div>Loading...</div>}
                    opentokClientUrl="https://static.opentok.com/v2/js/opentok.min.js"
                />
            </div>
        )
    }
}