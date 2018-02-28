let initialState = {};

export default (state = initialState, action) => {
  let {type, payload} = action;

  switch(type) { //type of action
  case 'CATEGORY_CREATE': return {...state, [payload._id]: []};
  case 'CATEGORY_DELETE':
    let changedState = {...state};
    delete state[payload._id];
    return  changedState; 
  case 'CARD_CREATE' : return;
  case 'CARD_UPDATE' : return;
  case 'CARD_DELETE' : return;
  case 'CARD_RESET' : return initialState;
  default: return state;
  }
};