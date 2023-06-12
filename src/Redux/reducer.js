const initState = "";

const reducer = (state = initState, action) => {
  if (action.type === "INPUT") return action.payload;
  else return state;
};

export default reducer;
