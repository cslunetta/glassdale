// put data into array
let officers = [];

// export useOfficers() function
export const useOfficers = () => officers.slice();

// fetch data from https://criminals.glassdale.us/officers
export const getOfficers = () => {
  // pulls data from api
  return fetch("https://criminals.glassdale.us/officers")
  // .json() method to convert to object
  .then((response) => response.json())
  // use fetched data object in array of officers
  .then((parsedOfficers) => {
      officers = parsedOfficers;
    });
};
