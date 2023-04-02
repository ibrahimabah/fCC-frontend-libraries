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


// Introducing Inline Styles
class Colorful extends React.Component {
  render() {
    return (
      <div style={{color:"red", fontSize:"72"}}>Big Red</div>
    );
  }
};

// Render Conditionally from Props
class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    {/* Change code below this line */}
    return (<h1>{this.props.fiftyFifty ? "You Win!" : "You Lose!"}</h1>);
    {/* Change code above this line */}
  }
}

class GameOfChance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(prevState => {
      // Complete the return statement:
      return {
        counter: this.state.counter + 1
      }
    });
  }
  render() {
    const expression = Math.random() >= .5; // Change this line
    return (
      <div>
        <button onClick={this.handleClick}>Play Again</button>
        {/* Change code below this line */}
        <Results fiftyFifty={expression}/>     
        {/* Change code above this line */}
        <p>{'Turn: ' + this.state.counter}</p>
      </div>
    );
  }
}

// Change Inline CSS Conditionally Based on Component State
class GateKeeper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ input: event.target.value })
  }
  render() {
    let inputStyle = {
      border: '1px solid black'
    };
    // Change code below this line
    if(this.state.input.length > 15){

      inputStyle.border = '3px solid red'
    }
    // Change code above this line
    return (
      <div>
        <h3>Don't Type Too Much:</h3>
        <input
          type="text"
          style={inputStyle}
          value={this.state.input}
          onChange={this.handleChange} />
      </div>
    );
  }
};

// Use Array.map() to Dynamically Render Elements
const textAreaStyles = {
  width: 235,
  margin: 5
};

class MyToDoList extends React.Component {
  constructor(props) {
    super(props);
    // Change code below this line
    this.state = {
      userInput: '',
      toDoList: []
    }
    // Change code above this line
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit() {
    const itemsArray = this.state.userInput.split(',');
    this.setState({
      toDoList: itemsArray
    });
  }
  handleChange(e) {
    this.setState({
      userInput: e.target.value
    });
  }
  render() {
    const items = this.state.toDoList.map(i => <li>{i}</li>); // Change this line
    return (
      <div>
        <textarea
          onChange={this.handleChange}
          value={this.state.userInput}
          style={textAreaStyles}
          placeholder='Separate Items With Commas'
        />
        <br />
        <button onClick={this.handleSubmit}>Create List</button>
        <h1>My "To Do" List:</h1>
        <ul>{items}</ul>
      </div>
    );
  }
}

// Use Array.filter() to Dynamically Filter an Array
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          username: 'Jeff',
          online: true
        },
        {
          username: 'Alan',
          online: false
        },
        {
          username: 'Mary',
          online: true
        },
        {
          username: 'Jim',
          online: false
        },
        {
          username: 'Sara',
          online: true
        },
        {
          username: 'Laura',
          online: true
        }
      ]
    };
  }
  render() {
    const usersOnline = this.state.users.filter(user => user.online === true); // Change this line
    const renderOnline = usersOnline.map(user => <li key={user.username}>{user.username}</li>); // Change this line
    return (
      <div>
        <h1>Current Online Users:</h1>
        <ul>{renderOnline}</ul>
      </div>
    );
  }
}