export const selectNeighbourhoodyById = (id) => (reduxState) =>
  reduxState.city.cityDetails.neighbourhoods.find(
    (nb) => nb.id === parseInt(id)
  );

export const selectPoiByID = (nb_id, poi_id) => (reduxState) => {
  const nb = reduxState.city?.cityDetails?.neighbourhoods.find(
    (nb) => nb.id === parseInt(nb_id)
  );
  return nb.pointsOfInterests?.find((poi) => poi.id === parseInt(poi_id));
};
