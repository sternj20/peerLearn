import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom'
import users from "./src/user.js"
import fetchSession from '../config';
import VideoPage from './VideoPage/VideoPage';
import Splash from "./Splash/Splash"
import DescribePartner from "./DescribePartner/DescribePartner";
import LearningOptions from "./LearningOptions/LearningOptions";
import Loader from "./Loader/Loader";
import MeditateInstruct from "./MeditateInstruct/MeditateInstruct"

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
            auth: true,
            loading: true
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

    auth = () => {
        if(this.state.auth){
            return <LearningOptions/>
        } else{
            return <Splash login={this.login}/>
        }
    }
    login = () => {
      let userName = document.querySelector('.userName').value;
      let userPw = document.querySelector('.pw').value;
      if(users[userName] === userPw){
        this.setState({auth:true})
        console.log('true')
      }
    }
    render(){
        if (!this.state.hasCredentials) {
            return <div>
                    </div>
        }
         return(
                <Switch>
                    <Route exact path="/" component={this.auth}/>
                    <Route path="/options" component={LearningOptions}/>
                    <Route path="/loading" component={Loader}/>
                    <Route path="/meditate" component={MeditateInstruct}/>
                    <PropsRoute path="/video" component={VideoPage} apiKey={this.state.apiKey} sessionId={this.state.sessionId} token={this.state.token}/>
                </Switch>
            )
    }
}