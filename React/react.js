const JSX = <h1>Hello JSX!</h1>;
const JSXelements = (
<div>
  <h1>JSX</h1>
  <p>Welcome To React</p>
  <ul>
    {/* */}
    <li>JSX Elements</li>
    <li>React Components</li>
    <li>Valid JSX methods</li>
  </ul>
</div>,

<div className="myDiv">
      <h1>Hello World</h1>
      <p>Lets render this to the DOM</p>
</div>,


<div>
    <h2>Welcome to React!</h2> <br />
    <p>Be sure to close all tags!</p>
    <hr />
</div>
);

// Render HTML Elements to the DOM
ReactDOM.render(JSX, document.getElementById('challenge-node'));