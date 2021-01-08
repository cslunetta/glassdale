import { getConvictions, useConvictions } from "./convictionProvider.js";

// Using the container class on <main> as the eventHub
const eventHub = document.querySelector(".container");
const contentTarget = document.querySelector(".filters__crime");

//listening for a change event
contentTarget.addEventListener("change", (event) => {
  //if crimeSelect is changed
  if (event.target.id === "crimeSelect") {
    //custom event
    console.log(event.target.value)
    const customEvent = new CustomEvent("crimeChosen", {
      detail: {
        crimeThatWasChosen: event.target.value,
      },
    });
    // dispatch to hub
    eventHub.dispatchEvent(customEvent);
  }
});

export const convictionSelect = () => {
  getConvictions().then(() => {
    const convictions = useConvictions();
    render(convictions);
  });
};

const render = (convictionsCollection) => {
  //use .map() to iterate through array of convictions and give options elemements for dropdown
  contentTarget.innerHTML = `
    <fieldset class="select__crimeSelect">
      <label for="crimeSelect">Crimes: </label>
      <select class="dropdown" id="crimeSelect">
        <option value="0">All</option>
          ${convictionsCollection.map(
            (crime) => `
              <option value="${crime.id}">
                ${crime.name}
              </option>
            `
          )}
      </select>
    </fieldset>
  `;
};
