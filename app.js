import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import config from './config';
import Root from './components/Root';

document.addEventListener("DOMContentLoaded", function(){
    render((
		  <BrowserRouter>
		    <Root/>
		  </BrowserRouter>
		), document.getElementById('content'))
})
