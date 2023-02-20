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

const MyComponent = function() {
    // Change code below this line
    return (
      <div>Hello There</div>
    );
  
    // Change code above this line
  }

  class MyPonent extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      // Change code below this line
  
      return (
        <div>
          <h1>Hello React!</h1>
        </div>  
      );
  
      // Change code above this line
    }
  };

  const ChildComponent = () => {
    return (
      <div>
        <p>I am the child</p>
      </div>
    );
  };
  
  class ParentComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>I am the parent</h1>
          { /* Change code below this line */ }
          
            <ChildComponent />
  
          { /* Change code above this line */ }
        </div>
      );
    }
  };

  const TypesOfFruit = () => {
    return (
      <div>
        <h2>Fruits:</h2>
        <ul>
          <li>Apples</li>
          <li>Blueberries</li>
          <li>Strawberries</li>
          <li>Bananas</li>
        </ul>
      </div>
    );
  };
  
  const Fruits = () => {
    return (
      <div>
        { /* Change code below this line */ }
          <TypesOfFruit />
        { /* Change code above this line */ }
      </div>
    );
  };
  
  class TypesOfFood extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div>
          <h1>Types of Food:</h1>
          { /* Change code below this line */ }
            <Fruits />
          { /* Change code above this line */ }
        </div>
      );
    }
  };