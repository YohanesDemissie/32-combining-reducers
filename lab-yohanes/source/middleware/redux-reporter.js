export default store => next => action => {

  return action => {
    console.group(action.type || 'Initial State');
    console.info('dispatching', action);

    let results = next(action);
    console.log('__NEXT_STATE__', store.getState());

    console.groupEnd(action.type || 'Initial State');
    return results;
  };
};
