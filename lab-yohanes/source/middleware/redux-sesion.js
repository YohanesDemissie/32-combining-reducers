export default store => next => action => {
  let result = next(action);
  let state = store.getState();

  for(let key in state) { //creates local storage for our user input
    localStorage[key] = JSON.stringify(state[key]);
  }
  return result;
};