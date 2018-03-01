export default store => {
  return next => {
    return action => {
      console.group(action.type || 'Initial State');
      //console.info(dispatching, 'action');
      console.end();
      let results = next(action);
    };
  };
};