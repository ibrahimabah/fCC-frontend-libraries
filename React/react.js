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


{/* Write a React Component from Scratch */}
class MySomponent extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <h1>My First React Component!</h1>
      </div>
    );
  }
}

ReactDOM.render(<MySomponent/>, document.getElementById('challenge-node'));

{/* Write a Simple Counter */}
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    // Change code below this line
this.increment = this.increment.bind(this);
this.decrement = this.decrement.bind(this);
this.reset = this.reset.bind(this);
    // Change code above this line
  }
  // Change code below this line
reset(){
  this.setState({
    count: 0
  });
}
increment(){
  this.setState( state => ({
    count: state.count + 1
  }));
}
decrement(){
  this.setState( state => ({
    count: state.count - 1
  }));
}
  // Change code above this line
  render() {
    return (
      <div>
        <button className='inc' onClick={this.increment}>Increment!</button>
        <button className='dec' onClick={this.decrement}>Decrement!</button>
        <button className='reset' onClick={this.reset}>Reset</button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
};


// Use a Ternary Expression for Conditional Rendering
const inputStyle = {
  width: 235,
  margin: 5
};

class CheckUserAge extends React.Component {
  constructor(props) {
    super(props);
    // Change code below this line
    this.state = {
      userAge: '',
      input: ''
    }
    // Change code above this line
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      input: e.target.value,
      userAge: ''
    });
  }
  submit() {
    this.setState(state => ({
      userAge: state.input
    }));
  }
  render() {
    const buttonOne = <button onClick={this.submit}>Submit</button>;
    const buttonTwo = <button>You May Enter</button>;
    const buttonThree = <button>You Shall Not Pass</button>;
    return (
      <div>
        <h3>Enter Your Age to Continue</h3>
        <input
          style={inputStyle}
          type='number'
          value={this.state.input}
          onChange={this.handleChange}
        />
        <br />
        {/* Change code below this line */}
        {
          this.state.userAge === ''
          ? buttonOne
          : this.state.userAge >= 18
          ? buttonTwo
          : buttonThree
        }
        {/* Change code above this line */}
      </div>
    );
  }
}