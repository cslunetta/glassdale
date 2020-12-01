import { getConvictions, useConvictions } from "./convictionProvider.js";

const contentTarget = document.querySelector(".filters__crime");

export const convictionSelect = () => {
  getConvictions().then(() => {
    const convictions = useConvictions();
    render(convictions);
  });
};

const render = (convictionsCollection) => {
  contentTarget.innerHTML = `
      <select class="dropdown" id="crimeSelect">
        <option value="0">Please select a crime...</option>
        ${convictionsCollection.map((convictionObject) => {
          const name = convictionObject.name;
          return `<option>${name}</option>`;
        })}
      </select>
    `;
};
