let initialState = {};

export default (state = initialState, action) => {
  let {type, payload} = action;

  switch(type) { //type of action
  case 'CATEGORY_CREATE': return {...state, [payload._id]: []};
  case 'CATEGORY_DELETE': {
    let categoryState = state;
    delete categoryState[payload._id];
    return {...categoryState};
    // let changedState = {...state};
    // delete state[payload._id];
    // return  changedState;
  }
  case 'CARD_CREATE' : {
    let categoryState = state;
    categoryState[payload._id] = categoryState[payload._id].push(payload);
    return {...categoryState};}
  // case 'CARD_UPDATE' : return;
  // case 'CARD_DELETE' : return;
  // case 'CARD_RESET' : return initialState;
  default: return state;
  }
};