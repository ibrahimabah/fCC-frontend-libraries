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

//  >   >   >   >   >   Get State from the Redux Store  <   <   <   <   <
store = Redux.createStore(
    (state = 5) => state
  );
/*
    Retrieving data from "store" by using the "getState()"" method.
 */
let currentState = store.getState();



//  >   >   >   >   >   Define a Redux Action   <   <   <   <   <
// Declaring an "object" named 'action' and giving it a "property" of 'type' set to the "string" of 'LOGIN'
const action = {
    type: 'LOGIN'
}

//  >   >   >   >   >   Define an Action Creator    <   <   <   <   <
action = {
    type: 'LOGIN'
}
// Define a "function" named 'actionCreator()' that returns the action object when called.
function actionCreator(){
    return action;
}

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