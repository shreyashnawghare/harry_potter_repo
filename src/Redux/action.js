const action = (textObj) => {
  return {
    type: "INPUT",
    payload: textObj,
  };
};
export default action;
