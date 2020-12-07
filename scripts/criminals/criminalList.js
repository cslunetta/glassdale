import { getCriminals, useCriminals } from "./criminalDataProvider.js";
import { criminal } from "./criminal.js";
import { useConvictions } from "../convictions/convictionProvider.js";

// select element being used as eventHub
const eventHub = document.querySelector(".container");
const criminalElement = document.querySelector(".criminalsContainer");

//Render ALL criminals initally
export const criminalList = () => {
  getCriminals().then(() => {
    let perps = useCriminals();
    render(perps);
  });
};

//listen for custom event on convictionSelect.js of "crimeThatWasChosen"
eventHub.addEventListener("crimeChosen", (event) => {
  if (event.detail.crimeThatWasChosen !== "0") {
    //filter criminals by crime committed
    const crimes = useConvictions();
    const crime = crimes.find(
      (crime) => crime.id === parseInt(event.detail.crimeThatWasChosen)
    );

    const criminals = useCriminals();
    const matchingCriminals = criminals.filter(
      (criminal) => criminal.conviction === crime.name
    );

    render(matchingCriminals);
  }
});

const render = (criminals) => {
  let criminalCards = [];
  for (const perp of criminals) {
    criminalCards.push(criminal(perp));
  }
  criminalElement.innerHTML = criminalCards.join("");
};
