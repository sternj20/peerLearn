import React from "react";

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
                <div className="buttons align-middle col-md-12">
                    <button className="btn-lg demoBtn col-md-6 footer">Demo One</button>
                    <button className="btn-lg demoBtn col-md-6 footer">Demo two</button>
                </div>
            </div>
         </div>
    )
}

export default Splash; 