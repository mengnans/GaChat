export default (state = null, action) => {
switch (action.type) {
  case 'select_library':
  console.log(action.payload);
  console.log(action.bool);
    if (!action.bool) {
    return action.payload;
    }
    console.log('cancel');
    return action.payload + 100;
  default:
  console.log(state);
    return state;
}
};
