//chekcs for crashes
export default store => next => action => {
  try { //handling requests and responses at the same time
    return next(action);
  } catch(exception) {
    throw(exception);
  }
};