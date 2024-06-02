import fetch from "node-fetch";

export const getLocalityFromCoordinates = async (lat, lng) => {
  const url = `${GOOGLE_APIS}/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.GOOGLE_MAPS_API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
  if (data.status === "OK" && data.results.length > 0) {
    return data.results[0].formatted_address;
  } else {
    return "Localidade desconhecida";
  }
};
