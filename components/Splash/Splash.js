import React  from "react";
import users from "../src/user.js"
const login = () => {
  let userName = document.querySelector('.user').value;
  let userPw = document.querySelector('.pw').value;
  if(users[userName] === userPw){
    console.log('you shall pass')
  } else {
    console.log('you shall not pass')
  }
}

const Splash = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="header">
                    <h1>Peer Learn</h1>
                </div>
            </div>
            <div className="row">
                <div className="imgs">
                 IMGS GO HERE                                               
                </div>
            </div>
            <div className="row">            
                <div className="splashText col-md-12">
                    <h2><i>Personal development with like-minded people to grow together</i></h2>
                </div>

                


                <div className="login col-md-12">
                <div>
                    <label><b>Username</b></label>
                    <input type="text" className="user" placeholder="Enter Username" name="uname" required></input>
                </div>
                <div>                
                    <label><b>Password</b></label>
                    <input type="password" className="pw" placeholder="Enter Password" name="psw" required></input>
                </div>
                    <button className="btn-lg demoBtn col-md-6 footer" onClick={login}>Login</button>
                </div>
            </div>
         </div>
    )
}

export default Splash; 