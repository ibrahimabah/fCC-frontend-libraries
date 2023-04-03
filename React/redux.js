//  >   >   >   >   >   Create a Redux Store    <   <   <   <   <
const reducer = (state = 5) => {
    return state;
}
/*
    There are three parts to this challenge:
    1: Declaring the "store" variable
    2: Assigning it to the "createStore()" method.
    3: And Passing in the "reducer" as an argument.
*/
const store = Redux.createStore(reducer);
