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


