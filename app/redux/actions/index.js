export const backgroundOff = background => ({
  type: 'BackgroundOff',
  background,
});

export const getLoc = (long, lat) => {
  return {
    type: 'GetLocation',
    long,
    lat,
  };
};

export const putData = data => {
  return {
    type: 'Put_Data',
    payload: data,
  };
};

export const loadData = () => {
  return {
    type: 'Load_Data',
  };
};
