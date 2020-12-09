import { getCriminals, useCriminals } from "../criminalDataProvider.js";
import { alibiHTML } from "./alibi.js";

// Query the DOM for the element that your alibis will be added to
const contentTarget = document.querySelector(".alibiList");
// Define ye olde Evente Hubbe
const eventHub = document.querySelector(".container");

export const alibiList = () => {
  getCriminals().then(() => {
    let perps = useCriminals();
    render(perps);
  });
};

eventHub.addEventListener("alibiId", (customEvent) => {
  const criminals = useCriminals();
  const matchingCriminal = criminals.find(
    (criminal) => criminal.id === parseInt(customEvent.detail.id)
  );
  render(matchingCriminal);
});

const render = (criminals) => {
  let alibiCards = [];
  const alibis = criminals.known_associates;
  for (const alibi of alibis) {
    alibiCards.push(alibiHTML(alibi));
  }
  contentTarget.innerHTML = alibiCards.join("");
};
