import { getCriminals, useCriminals } from "../criminals/criminalDataProvider.js";
import {
  getCriminalFacilities,
  useCriminalFacilities,
} from "./criminalFacilityProvider.js";
import { getFacilities, useFacilities } from "./facilitiesProvider.js";
import { facility } from "./facility.js";

const eventHub = document.querySelector(".container");
const facilityElement = document.querySelector(".criminalsContainer");
const showFacilityElement = document.querySelector(".viewSelectorContainer");

eventHub.addEventListener("showFacilitiesClicked", (event) => {
  facilitiesList();
});

const facilitiesList = () => {
  getFacilities()
    .then(getCriminals)
    .then(getCriminalFacilities)
    .then(() => {
      const criminals = useCriminals();
      const crimFac = useCriminalFacilities();
      const facilities = useFacilities();

      render(facilities, criminals, crimFac);
    });
};

const render = (facilitiesToRender, allCriminals, allRelationships) => {
  facilityElement.innerHTML = facilitiesToRender
    .map((facilityObject) => {
      const criminalRelationshipsForThisFacility = allRelationships.filter(
        (cf) => cf.facilityId === facilityObject.id
      );

      const criminals = criminalRelationshipsForThisFacility.map((cf) => {
        const matchingCriminalObject = allCriminals.find(
          (criminal) => criminal.id === cf.criminalId
        );
        return matchingCriminalObject;
      });

      return facility(facilityObject, criminals);
    })
    .join("");
  showFacilityElement.innerHTML = `
    <h1>Facilities</h1>
      <button id="criminalView">Show Criminals</button>
      <button id="witnessView">Witnesses Statements</button>
  `;
};
