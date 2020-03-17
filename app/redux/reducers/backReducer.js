export const initialState = {
  back: require('../../assets/images/Background2.jpg'),
};

function backReducer(state = initialState, action) {
  if (action.background == true) {
    console.log('buttom is working');
    back = require('../../assets/images/Background.jpg');
    return {...state, back: back};
  }
  return state;
}

export default backReducer;
