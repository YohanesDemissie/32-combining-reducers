import uuid from 'uuid/v4';

export const expenseCreate = expense => {
  expense._id = uuid();
  expense.timeStamp = new Date();
  return {
    type: 'expense_CREATE',
    payload: expense,
  };
};

export const expenseUpdate = expense => ({
  type: 'expense_UPDATE',
  payload: expense,
});

export const expenseDelete = expense => ({
  type: 'expense_DELETE',
  payload: expense,
});

export const expenseReset = expense => ({
  type: 'expense_RESET',
});
