//   => =>  =>  =>  =>  REACT and REDUX   <=  <=  <=  <=  <=

//  >   >   >   >   >   Getting Started with React Redux    <   <   <   <   <
class DisplayMessages extends React.Component {
    // Change code below this line
    constructor(props){ // Add a constructor to this component
      super(props); // constructor should be called with super, passing in props
      this.state={ // initialize it with a state that has an input set to an empty string, and messages that's set to an empty array
        input: "",
        messages: []
      }
    }// end of "Getting Started with React Redux" challenge
    //  ⬇   ⬇   ⬇   ⬇   ⬇

//  >   >   >   >   >   Manage State Locally First  <   <   <   <   <
    // Add handleChange() and submitMessage() methods here
    handleChange(event){
        this.setState({
          input: event.target.value,
          messages: this.state.messages
        })// The handleChange() method should update the input with what the user is typing
      }
      
      submitMessage(){
        this.setState({
          input: '',
          messages: [...this.state.messages, this.state.input]
        })// The submitMessage() method should concatenate the current message (stored in input) to the messages array in local state, and clear the value of the input.
      }

    render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        { /* Render an input, button, and ul below this line */ }
        <input onChange={this.handleChange.bind(this)} value={this.state.input}/>{/* When the input element changes, it should trigger a handleChange() method and should render the value of input that's in the component's state. */}
        <button onClick={this.submitMessage.bind(this)}>Submit</button>{/* button element should trigger a submitMessage() method when it's clicked */}
        <ul>
          {this.state.messages.map((x, i) =>{//use the ul to map over the array of messages and render it to the screen as a list of li elements.
            return <li key={i}>{x}</li>
          })}
        </ul>
        { /* Change code above this line */ }
      </div> // end of "Manage State Locally First" challenge
    //  ⬇   ⬇   ⬇   ⬇   ⬇  
    );
  }
  };
  
//  >   >   >   >   >   Extract State Logic to Redux    <   <   <   <   <   
// Define ADD, addMessage(), messageReducer(), and store here:
const ADD = 'ADD'; //   define an action type ADD and set it to a const ADD
const addMessage = message => { // define an action creator addMessage() which creates the action to add a message and pass a message to this action creator and include the message in the returned action.
  return {
    type: ADD,
    message
  }
}

const messageReducer = (previousState = [], action) =>{ //  create a reducer called messageReducer() that handles the state for the messages.  
  switch (action.type){
    case ADD:
      return [...previousState, action.message]; // The initial state should equal an empty array. This reducer should add a message to the array of messages held in state, 
      break
    default:
    return previousState // or return the current state. 
  }
}

const store = Redux.createStore(messageReducer); // create your Redux store and pass it the reducer.
//  ⬇   ⬇   ⬇   ⬇   ⬇

//  >   >   >   >   >   Use Provider to Connect Redux to React  <   <   <   <   <
const Provider = ReactRedux.Provider;
class AppWrapper extends React.Component {
    render(){// render the Provider
        return (
          <Provider store={store}> {/*pass the Redux store as a prop*/}
            <DisplayMessages />{/* render the DisplayMessages component as a child */}
          </Provider>
        )
      }
    // Change code above this line
  };
  //  ⬇   ⬇   ⬇   ⬇   ⬇

//  >   >   >   >   >   Map State to Props  <   <   <   <   <
const mapStateToProps = messages => { // create a mapStateToProps function and create a messages property
    return {    // return an object
      type: state, // pass state as an array to mapStateToProps
      messages // assign array to a key messages
    }
  }
  //  ⬇   ⬇   ⬇   ⬇   ⬇

//  >   >   >   >   >   Map Dispatch to Props   <   <   <   <   <
const mapDispatchToProps = (dispatch) => { // create a mapDispatchToProps function with dispatch as an argument
    return { // return an object with keys type and message
      submitNewMessage: (message)=>{ // return a message to the dispatch function
        dispatch(addMessage(message)) // dispatch addMEssage with submitNewMessage
      }
    }
  }
  //  ⬇   ⬇   ⬇   ⬇   ⬇

//  >   >   >   >   >   Connect Redux to React  <   <   <   <   <  
  class Presentational extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <h3>This is a Presentational Component</h3>
    }
  };
  
  const connect = ReactRedux.connect;
  // Change code below this line
  const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps) (Presentational) /* Connect the Presentational component to Redux with the connect method from the ReactRedux global object, and call it immediately on the Presentational component. Assign the result to a new const called ConnectedComponent that represents the connected component. */
  //  ⬇   ⬇   ⬇   ⬇   ⬇

//  >   >   >   >   >   Connect Redux to the Messages App  <   <   <   <   < 
const Container = connect(mapStateToProps, mapDispatchToProps) (Presentational) // Create a Container component held in a constant that uses connect to connect the Presentational component to Redux

class AppWrapper extends React.Component {
  constructor(props) {
    super(props);
  }
  render() { // render the React Redux Provider component
    return (
      <Provider store={store}> {/* Pass Provider the Redux store as a prop*/}
        <Container /> {/*  render Container as a child.   */}
      </Provider>
    );
  }
};
//  ⬇   ⬇   ⬇   ⬇   ⬇

//  >   >   >   >   >   Extract Local State into Redux  <   <   <   <   <
// updates on freeCodeCamp
//  ⬇   ⬇   ⬇   ⬇   ⬇

//  >   >   >   >   >   Moving Forward From here  <   <   <   <   <
/*
    Helpful links:
    * https://www.freecodecamp.org/news/install-react-with-create-react-app/
 */
/*
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './redux/reducers'
import App from './components/App'

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
*/

// Only change code below this line
console.log('Now I know React and Redux!')
//    >   >   >   >   >   End of "Redux and React" Library    <   <   <   <   <  

