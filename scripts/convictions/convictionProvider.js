let convictions = [];

export const useConvictions = () => convictions.slice();

export const getConvictions = () => {
  //load database
  return fetch("https://criminals.glassdale.us/crimes")
    .then((response) => response.json())
    .then((parsedConvictions) => {
      convictions = parsedConvictions;
    });
};
