export const initialState = {
  latitude: 'qwe',
  longitude: 'ewq',
};

function locationReducer(state = initialState, action) {
  switch (action.type) {
    case 'GetLocation': {
      longitude = action.long;
      latitude = action.lat;
      return {latitude, longitude};
    }
  }
  return state;
}

export default locationReducer;
