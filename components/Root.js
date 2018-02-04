import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom'
import users from "./src/user.js"

import fetchSession from '../config';
import VideoPage from './VideoPage/VideoPage';
import Splash from "./Splash/Splash"
import DescribePartner from "./DescribePartner/DescribePartner";
import LearningOptions from "./LearningOptions/LearningOptions";

const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest);
  return (
    React.createElement(component, finalProps)
  );
}
const PropsRoute = ({ component, ...rest }) => {
  return (
    <Route {...rest} render={routeProps => {
      return renderMergedProps(component, routeProps, rest);
    }}/>
  );
}
export default class Root extends Component{
    constructor(props){
        super(props)
        this.state = {
            hasCredentials: false,
            auth: false
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

    login = () => {
      let userName = document.querySelector('.user').value;
      let userPw = document.querySelector('.pw').value;
      if(users[userName] === userPw){
        this.setState({auth:true})
      }
    }
    render(){
        if (!this.state.hasCredentials) {
            return <div>
                    </div>
        }
        return (
            <Switch>
                {this.state.auth? <LearningOptions/> :
                <PropsRoute exact path="/" component={Splash} login={this.login}/>
                }}
            </Switch>
        )
    }
}