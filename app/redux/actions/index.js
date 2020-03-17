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
export const loadLoc = () => ({
  type: 'LoadLoc',
});
