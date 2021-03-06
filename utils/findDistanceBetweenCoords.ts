import degToRad from "./degToRad";

// Based on Haversine formula adapted from https://en.wikipedia.org/wiki/Haversine_formula#:~:text=The%20haversine%20formula%20determines%20the,and%20angles%20of%20spherical%20triangles.
const findDistanceBetweenCoords = (
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number
) => {
  const EARTH_RADIUS = 6371;

  const latDiff = degToRad(lat1 - lat2);
  const lngDiff = degToRad(lng1 - lng2);

  const lat1Rad = degToRad(lat1);
  const lat2Rad = degToRad(lat2);

  return (
    2 *
    EARTH_RADIUS *
    Math.asin(
      Math.sqrt(
        Math.pow(Math.sin(latDiff / 2), 2) +
          Math.cos(lat1Rad) *
            Math.cos(lat2Rad) *
            Math.pow(Math.sin(lngDiff / 2), 2)
      )
    )
  );
};

export default findDistanceBetweenCoords;
