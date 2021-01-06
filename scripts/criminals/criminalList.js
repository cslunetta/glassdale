import { getCriminals, useCriminals } from "./criminalDataProvider.js";
import { criminal } from "./criminal.js";
import { useConvictions } from "../convictions/convictionProvider.js";
import { useOfficers } from "../officers/OfficerDataProvider.js";

// select element being used as eventHub
const eventHub = document.querySelector(".container");
const criminalElement = document.querySelector(".criminalsContainer");
const showWitnessElement = document.querySelector(".viewSelectorContainer");

//Render ALL criminals initally
export const criminalList = () => {
  getCriminals().then(() => {
    let perps = useCriminals();
    render(perps);
    showWitnessElement.innerHTML = `<button id="witnessView">Show Witnesses</button>`
  });
};

//If witnesses are showing clicking button renders Criminals again.
eventHub.addEventListener("showCriminalsClicked", (event) => {
  criminalList();
});

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

//listen for custom event on OfficerSelect.js of "officerThatWasChosen"

eventHub.addEventListener("officerChosen", (event) => {
  if (event.detail.officerThatWasChosen !== "0") {
    const officers = useOfficers();
    const officer = officers.find(
      (officer) => officer.id === parseInt(event.detail.officerThatWasChosen)
    );

    const criminals = useCriminals();
    const matchingCriminals = criminals.filter(
      (criminal) => criminal.arrestingOfficer === officer.name
    );
    render(matchingCriminals);
    console.log(matchingCriminals);
  }
});

const render = (criminals) => {
  let criminalCards = [];
  for (const perp of criminals) {
    criminalCards.push(criminal(perp));
  }
  criminalElement.innerHTML = criminalCards.join("");
};
