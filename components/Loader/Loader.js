import React from "react";
import {Link} from "react-router-dom";
const hideLoader = () => {
	console.log('working')
	window.setTimeout(showUser, 1000)
}
const showUser = () => {
	document.querySelector(".loader").style.display="none"
	document.querySelector(".loadingText").style.display="none"
	document.querySelector(".user").style.display="block"

}
const Loader = () => {
	hideLoader()
	return (
		<div>
			<div className="loader"></div>
			<div className="loadingText">Searching for users...</div>
			<div className="user">
      	<btn className="btn-lg col-sm-10"><Link to="/video">Start session</Link></btn>
      </div>
		</div>
	)
}

export default Loader;