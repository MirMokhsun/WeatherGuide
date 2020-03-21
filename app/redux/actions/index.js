const BACKGROUND_OFF = 'BACKGROUND_OFF'
const BACKGROUND_ON = 'BACKGROUND_ON'
const GET_LOCATION = 'GETLOCATION'
const PUT_DATA = 'PUT_DATA'
const LOAD_DATA = 'LOAD_DATA'

export const backgroundOff = background => ({
  type: BACKGROUND_OFF,
  payload: background = false,
});

export const backgroundOn = background => ({
  type: BACKGROUND_ON,
  payload: background = true,
});

export const getLoc = (long, lat) => {
  return {
    type: GET_LOCATION,
    long,
    lat,
  };
};

export const putData = data => {
  return {
    type: PUT_DATA,
    payload: data,
  };
};

export const loadData = () => {
  return {
    type: LOAD_DATA,
  };
};
