import React from 'react';
import { render } from 'react-dom';

import config from './config';
import Root from './components/Root';

document.addEventListener("DOMContentLoaded", function(){
    render(<Root />, document.getElementById('content'));
})
