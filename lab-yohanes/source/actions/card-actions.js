import uuid from 'uuid/v4';
let cardCreate = card => {
  card._id = uuid();
  card.timeStamp = new Date();
  return {
    type: 'CARD_CREATE',
    payload: card,
  };
};
let cardUpdate = card => ({
  type: 'CARD_UPDATE',
  payload: card,
});
let cardDelete = card => ({
  type: 'CARD_DELETE',
  payload: card,
});
let cardReset = card => ({
  type: 'CARD_RESET',
});