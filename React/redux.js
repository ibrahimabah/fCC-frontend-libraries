//   => =>  =>  =>  =>  REDUX   <=  <=  <=  <=  <=
//  >   >   >   >   >   Create a Redux Store    <   <   <   <   <
const reducer = (state = 5) => {
    return state;
}
/*
    There are three parts to this challenge:
    (1) Declaring the "store" variable
    (2) Assigning it to the "createStore()" method
    (3) And Passing in the "reducer" as an argument
*/
const store = Redux.createStore(reducer);
//  ⬇   ⬇   ⬇   ⬇   ⬇

//  >   >   >   >   >   Get State from the Redux Store  <   <   <   <   <
store = Redux.createStore(
    (state = 5) => state
  );
/*
    Retrieving data from "store" by using the "getState()"" method.
 */
let currentState = store.getState();
//  ⬇   ⬇   ⬇   ⬇   ⬇

//  >   >   >   >   >   Define a Redux Action   <   <   <   <   <
// Declaring an "object" named 'action' and giving it a "property" of 'type' set to the "string" of 'LOGIN'
const action = {
    type: 'LOGIN'
}
//  ⬇   ⬇   ⬇   ⬇   ⬇

//  >   >   >   >   >   Define an Action Creator    <   <   <   <   <
action = {
    type: 'LOGIN'
}
// Define a "function" named 'actionCreator()' that returns the action object when called.
function actionCreator(){
    return action;
}
//  ⬇   ⬇   ⬇   ⬇   ⬇

//  >   >   >   >   >   Dispatch an Action Event    <   <   <   <   <
store = Redux.createStore(
    (state = {login: false}) => state
  );
  
const loginAction = () => {
    return {
      type: 'LOGIN'
    }
};
// Dispatching the 'LOGIN' "action" to the "Redux" 'store' by calling the "dispatch" method, and pass in the action created by 'loginAction()'.
store.dispatch(loginAction());
store.dispatch({type: 'LOGIN'});
//  ⬇   ⬇   ⬇   ⬇   ⬇

//  >   >   >   >   >   Handle an Action in the Store   <   <   <   <   <
const defaultState = {
    login: false
  };
  
  reducer = (state = defaultState, action) => {
    /*
        This challenge's requirement are to fill in the body of the reducer function:
        (1) when it receives an "action" type of 'LOGIN'
        (2) use an "if" statement to "return" a 'state' "object" set to 'true'
        (3) otherwise "return" the "current" 'state'
        * Note : the current state and the dispatched action are passed to the reducer, so you can access the action's type directly with action.type.
     */
    if (action.type === 'LOGIN') {
        return {
            login: true
        };
    } else {
        return state;
    }
    // end of challenge
  };
  
  store = Redux.createStore(reducer);
  
  loginAction = () => {
    return {
      type: 'LOGIN'
    }
  };
//  ⬇   ⬇   ⬇   ⬇   ⬇

//    >   >   >   >   >   Use a Switch Statement to Handle Multiple Actions   <   <   <   <   <
  defaultState = {
    authenticated: false
  };
  
  const authReducer = (state = defaultState, action) => {
    /*
        Challenge Objective:
        (1) Fill in the 'reducer' "function" to handle multiple authentication actions
        (2) Use a "switch" statement in the 'reducer' to respond to different 'action' "events"
        (3) The "switch" statement should switch over 'action.type' and 'return' the appropriate authentication 'state'. ( This is a standard pattern in writing Redux reducers. )

        * Note:  Don't forget to write a 'default case' in your "switch statement" that "returns" the 'current state'. This is important avoid multiple reducers running any time an action dispatch is made, even when the action isn't related to that reducer.
    */
    switch (action.type) {
        case 'LOGIN':
            return {
                authenticated: true
            };
        case 'LOGOUT':
            return {
                authenticated: false
            };    
        default:
        return defaultState;
    }
    // end of "Use a Switch Statement to Handle Multiple Actions" challenge
  };
  
  store = Redux.createStore(authReducer);
  
  const loginUser = () => {
    return {
      type: 'LOGIN'
    }
  };
  
  const logoutUser = () => {
    return {
      type: 'LOGOUT'
    }
  };
//  ⬇   ⬇   ⬇   ⬇   ⬇

//    >   >   >   >   >   Use const for Action Types  <   <   <   <   <
  /*
    Challenge Objective:
    (1)    Declare LOGIN and LOGOUT as const values
    (2)    Assign them to the strings 'LOGIN' and 'LOGOUT', respectively. 
    (3)    Edit the authReducer() and the action creators to reference these constants instead of string values.

    *   Note:  It's generally a convention to write constants in all uppercase, and this is standard practice in Redux as well.
*/
  const LOGIN = 'LOGIN';
  const LOGOUT = 'LOGOUT';
// end of "Use const for Action Types" challenge (const values updated below respectively) 
  
  defaultState = {
    authenticated: false
  };
  
  authReducer = (state = defaultState, action) => {
  
    switch (action.type) {
      case LOGIN: 
        return {
          authenticated: true
        }
      case LOGOUT: 
        return {
          authenticated: false
        }
  
      default:
        return state;
  
    }
  
  };
  
  store = Redux.createStore(authReducer);
  
  loginUser = () => {
    return {
      type: LOGIN
    }
  };
  
  logoutUser = () => {
    return {
      type: LOGOUT
    }
  };
//  ⬇   ⬇   ⬇   ⬇   ⬇

//    >   >   >   >   >   Register a Store Listener   <   <   <   <   <
const ADD = 'ADD';

reducer = (state = 0, action) => {
  switch(action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};

store = Redux.createStore(reducer);

// Global count variable:
let count = 0;

/*
    Challenge Objective:
    (1)    Write a callback function 
    (2)    Increment the global variable count every time the store receives an action
    (3)    Pass this function in to the store.subscribe() method. 
*/    
const callBack = () => count++;
store.subscribe(callBack);
// end of "Register a Store Listener" challenge

/* 
    You'll see that store.dispatch() is called three times in a row, each time directly passing in an action object. Watch the console output between the action dispatches to see the updates take place.

        store.dispatch({type: ADD});
        console.log(count);
        store.dispatch({type: ADD});
        console.log(count);
        store.dispatch({type: ADD});
        console.log(count);
*/
//  ⬇   ⬇   ⬇   ⬇   ⬇

//  >   >   >   >   >   Combine Multiple Reducers   <   <   <   <   <
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

authReducer = (state = {authenticated: false}, action) => {
  switch(action.type) {
    case LOGIN:
      return {
        authenticated: true
      }
    case LOGOUT:
      return {
        authenticated: false
      }
    default:
      return state;
  }
};

/*
    Challenge Objective:
    (1)    Finish writing the rootReducer() function 
    (2)    Use the Redux.combineReducers() method. 
    (3)    Assign counterReducer to a key called count 
    (4)    And assign authReducer to a key called auth.
*/
const rootReducer = Redux.combineReducers({
    count : counterReducer,
    auth : authReducer
}); // Define the root reducer here
// end of "Combine Multiple Reducers" challenge

store = Redux.createStore(rootReducer);
//  ⬇   ⬇   ⬇   ⬇   ⬇

//  >   >   >   >   >   Send Action Data to the Store   <   <   <   <   <
const ADD_NOTE = 'ADD_NOTE';

const notesReducer = (state = 'Initial State', action) => {
  switch(action.type) {
    // start of "Send Action Data to the Store" challenge

    /* 
        Second Objective:
        (1)    finish writing the 'switch' "statement" in the 'notesReducer()'
        (2)    add a 'case' that handles the 'addNoteText()' "actions".
        (3)    'case' should be triggered whenever there is an "action" of 'type' 'ADD_NOTE' and it should "return" the 'text' "property" on the incoming "action" as the new state.
    */
      case ADD_NOTE:
        return action.text;
      // added code is above
    default:
      return state;
  }
};

const addNoteText = (note) => {
  /*
    first Objective:
    (1)    Finish the body of the 'addNoteText()' "function" so that it returns an 'action' "object"
    (2)    The "object" should include a 'type' property with a value of 'ADD_NOTE'
    (3)    And also a 'text' property set to the 'note' "data" that's passed into the action creator.
    # When you call the action creator, you'll pass in specific note information that you can access for the object.
   */
      return {
        type: ADD_NOTE,
        text: note
      }
  // end of "Send Action Data to the Store" challenge
};

store = Redux.createStore(notesReducer);

/*
    The action is dispatched here when the code is run
        console.log(store.getState());
        store.dispatch(addNoteText('Hello!'));
        console.log(store.getState());
 */
