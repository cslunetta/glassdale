import { getCriminals, useCriminals } from "./criminalDataProvider.js";
import { criminal } from "./criminal.js";
import { useConvictions } from "../convictions/convictionProvider.js";
import { useOfficers } from "../officers/OfficerDataProvider.js";
import {
  getFacilities,
  useFacilities,
} from "../facility/facilitiesProvider.js";
import {
  getCriminalFacilities,
  useCriminalFacilities,
} from "../facility/criminalFacilityProvider.js";

// select element being used as eventHub
const eventHub = document.querySelector(".container");
const criminalElement = document.querySelector(".criminalsContainer");
const showWitnessElement = document.querySelector(".viewSelectorContainer");

//Render ALL criminals initally
export const criminalList = () => {
  getCriminals()
    .then(getFacilities)
    .then(getCriminalFacilities)
    .then(() => {
      // Pull in the data now that it has been fetched
      const facilities = useFacilities();
      const crimFac = useCriminalFacilities();
      const criminals = useCriminals();

      // Pass all three collections of data to render()
      render(criminals, facilities, crimFac);
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

    getFacilities()
      .then(getCriminalFacilities)
      .then(() => {
        const facilities = useFacilities();
        const crimFac = useCriminalFacilities();
        const criminals = useCriminals();

        const matchingCriminals = criminals.filter(
          (criminalObject) => criminalObject.conviction === crime.name
        );
        render(matchingCriminals, facilities, crimFac);
      });
  } else {
    criminalList();
  }
});

//listen for custom event on OfficerSelect.js of "officerThatWasChosen"

eventHub.addEventListener("officerChosen", (event) => {
  if (event.detail.officerThatWasChosen !== "0") {
    const officers = useOfficers();
    const officer = officers.find(
      (officer) => officer.id === parseInt(event.detail.officerThatWasChosen)
    );

    getFacilities()
      .then(getCriminalFacilities)
      .then(() => {
        // Pull in the data now that it has been fetched
        const facilities = useFacilities();
        const crimFac = useCriminalFacilities();
        const criminals = useCriminals();
        const matchingCriminals = criminals.filter(
          (criminalObject) => criminalObject.arrestingOfficer === officer.name
        );

        // Pass all three collections of data to render()
        render(matchingCriminals, facilities, crimFac);
      });
  } else {
    criminalList();
  }
});

const render = (criminalsToRender, allFacilities, allRelationships) => {
  criminalElement.innerHTML = criminalsToRender
    .map((criminalObject) => {
      const facilityRelationshipsForThisCriminal = allRelationships.filter(
        (cf) => cf.criminalId === criminalObject.id
      );

      const facilities = facilityRelationshipsForThisCriminal.map((cf) => {
        const matchingFacilityObject = allFacilities.find(
          (facility) => facility.id === cf.facilityId
        );
        return matchingFacilityObject;
      });

      return criminal(criminalObject, facilities);
    })
    .join("");
  showWitnessElement.innerHTML = `
    <h1>Criminals</h1>
    <button id="witnessView">Witnesses Statements</button>
    <button id="facilityView">Facilities</button>
  `;
};
