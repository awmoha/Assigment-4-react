export const incroment = (value) => ({
  type: "incroment",
  payload: value,
});
export const changeMode = () => ({
  type: "changeMode"
});
const initialState = {
  count: 1000,
  isDarkMode: false,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "incroment":
      return { count: state.count + action.payload };
    case "changeMode":
      return { ...state, isDarkMode: !state.isDarkMode };
    default:
      return state;
  }
};
export default reducer;
