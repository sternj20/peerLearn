import React, {Component} from 'react'
import Video from '../video_components/Video'
import config from '../../config'

export default class VideoPage extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div>
                    <Video
                        className="video-screen"
                        apiKey={this.props.apiKey}
                        sessionId={this.props.sessionId}
                        token={this.props.token}
                        loadingDelegate={<div>Loading...</div>}
                        opentokClientUrl="https://static.opentok.com/v2/js/opentok.min.js"
                    />
                </div>
            </div>
        )
    }
}