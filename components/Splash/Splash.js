import React  from "react";

const Splash = props => {
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
                        <label><b>User Name</b></label>
                        <input className="userName" placeholder="Enter User Name" name="psw" required/>
                    </div>
                    <div>                
                        <label><b>Password</b></label>
                        <input type="password" className="pw" placeholder="Enter Password" name="psw" required/>
                    </div>
                        <button className="btn-lg demoBtn col-md-6 footer" onClick={props.login}>Login</button>
                    </div>
                </div>
         </div>
    )
}

export default Splash; 