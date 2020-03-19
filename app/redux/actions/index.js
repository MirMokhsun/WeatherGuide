export const BACKGROUNDOFF = 'BACKGROUNDOFF'
export const GETLOCATION = 'GETLOCATION'
export const PUTDATA = 'PUTDATA'
export const LOADDATA = 'LOADDATA'

export const backgroundOff = background => ({
  type: BACKGROUNDOFF,
  background,
});

export const getLoc = (long, lat) => {
  return {
    type: GETLOCATION,
    long,
    lat,
  };
};

export const putData = data => {
  return {
    type: 'PUTDATA',
    payload: data,
  };
};

export const loadData = () => {
  return {
    type: 'LOADDATA',
  };
};
