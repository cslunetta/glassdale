import { getOfficers, useOfficers } from "./OfficerDataProvider.js";

const eventHub = document.querySelector(".container");
const contentTarget = document.querySelector(".filters__officer");

// where to listen for an event change from
contentTarget.addEventListener("change", (event) => {
  // if officerSelect is changed
  if (event.target.id === "officerSelect") {
    // custom event
    // used to target officer chosen from the event
    const customEvent = new CustomEvent("officerChosen", {
      detail: {
        officerThatWasChosen: event.target.value,
      },
    });
    // send event to eventHub so it can be heard.
    eventHub.dispatchEvent(customEvent);
  }
});

// get data and then use it to create array for use when rendering officers in the DOM
export const officerSelect = () => {
  getOfficers().then(() => {
    const officers = useOfficers();
    render(officers);
  });
};

// render officers in DOM as a dropdown list
// .map() method to iterate through funtion that creates options for dropdown for each officer
const render = (officersCollection) => {
  contentTarget.innerHTML = `
    <fieldset class="select__officerSelect">
      <label for="officerSelect">Arresting Officer: </label>
      <select class="dropdown" id="officerSelect">
        <option value="0">All</option>
        ${officersCollection.map(
          (officer) => `
          <option value="${officer.id}">
            ${officer.name}
          </option>
        `
        ).join()}
      </select>
    </fieldset>
        `;
};
