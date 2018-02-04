import React from "react";

const LearningOptions = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="header">
                    <h1>What activity do you want to work on?</h1>
                </div>
                <div className="btnContainer">
                    <btn className="btn-lg col-sm-10">Meditate</btn>
                    <btn className="btn-lg col-sm-10">Assertive role play</btn>
                    <btn className="btn-lg col-sm-10">Listen</btn>
                    <btn className="btn-lg col-sm-10">Be heard</btn>
                    <btn className="btn-lg col-sm-10">Listen and be heard</btn>
                </div>
                <div className="col-sm-12"><h2>Choose activity</h2></div>
                <btn className="btn-lg col-sm-10">Next</btn>
            </div>            
        </div>
    )
}

export default LearningOptions;