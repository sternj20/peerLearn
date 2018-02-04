import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root'


document.addEventListener("DOMContentLoaded", function(){
  const content = document.getElementById('content');
  ReactDOM.render(<Root />, content)  
})

// render((
//   <div>
//     <Video
//       apiKey={config.API_KEY}
//       sessionId={config.SESSION_ID}
//       token={config.TOKEN}
//       loadingDelegate={<div>Loading...</div>}
//       opentokClientUrl="https://static.opentok.com/v2/js/opentok.min.js"
//     />
//   </div>
// ), document.getElementById('content'));
