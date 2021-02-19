var React = require('react');
var ReactDOM = require('react-dom');


// render element in home page

// ReactDOM.render(
// <h1>Hello World</h1>,
// document.getElementById('root')
// );

// var h1 = document.createElement("h1");
// h1.innerHTML = 'hello word';
// document.getElementById('root').appendChild(h1);

// ======================render multiple html tag inside render method ================================
// ReactDOM.render(
//   <div>
//   <h3>Index page</h3>
//   <p>hello this is my page</p>
//   </div>,
// document.getElementById('root')
// );
ReactDOM.render(
  <React.Fragment>
  <h3>Index page</h3>
  <p>hello this is my page</p>
  </React.Fragment>,
 
document.getElementById('root')
);