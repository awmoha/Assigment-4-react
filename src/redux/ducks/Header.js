export const addName = (value) => ({
  type: "name",
  payload: value,
});
const initialState = {
  name: "",
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "name":
      return { name: action.payload };
    default:
      return state;
  }
}; 

export default reducer;
