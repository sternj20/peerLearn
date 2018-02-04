import React from "react";
import {Link} from "react-router-dom";


const LearningOptions = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="header">
                    <h1>What activity do you want to work on?</h1>
                </div>
            </div>
            
                <div className="row btnContainer">
                    <btn className="btn-lg col-sm-10"><Link to="/meditate">Meditate</Link></btn>
                    <btn className="btn-lg col-sm-10">Assertive role play</btn>
                </div>
            <div className="row">                
                <div className="col-sm-12"><h2>Choose activity</h2></div>
            </div>
            <div className="row">            
                <btn className="btn-lg col-sm-10"><Link to="/loading">Next</Link></btn>
            </div>
        </div>            
    )
}

export default LearningOptions;