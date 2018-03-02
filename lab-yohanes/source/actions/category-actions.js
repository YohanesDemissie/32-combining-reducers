//define what we dispatch to reducers
import uuid from 'uuid/v4';


//here we're gonna pass in types and payload
//here we are returning an object(whjich is our action) and every action has a type and payload
export const categoryCreate = category => {

  category._id = uuid();
  category.timestamp = new Date();
  console.log(category, 'KEVIN WS HWERE');

  return {
    type: 'CATEGORY_CREATE',
    payload: category,
  };
};

export const categoryUpdate = category => ({
  type: 'CATEGORY_UPDATE',
  payload: category,
});

export const categoryDelete = category => ({
  type: 'CATEGORY_DELETE',
  payload: category,
});

export const categoryReset = () => ({type: 'CATEGORY_RESET'});