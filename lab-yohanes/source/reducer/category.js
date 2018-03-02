export default (state= [], action) => {
  let {type, payload} = action;
  console.log(payload, 'show me something');

  switch(type) {
  case 'CATEGORY_CREATE': {
    return [...state, payload]; }

  case 'CATEGORY_UPDATE': return state.map(cat => cat._id === payload._id ? payload : cat); //map grab and update
  case 'CATEGORY_DELETE': return state.filter(cat => cat._id !== payload._id);
  case 'CATEGORY_RESET': return [];
  default: return state;
  }
};

