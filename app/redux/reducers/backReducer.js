export const initialState = {
  background: true,
};

function backReducer(state = initialState, action) {
  switch (action.type) {
    case BACKGROUND:
      {
        background
        return { ...state, background }
      };
  }
  return state
}
export default backReducer;
