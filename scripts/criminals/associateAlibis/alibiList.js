import { getCriminals, useCriminals } from "../criminalDataProvider.js";
import { alibiHTML } from "./alibi.js";

// Query the DOM for the element that your alibis will be added to
// const contentTarget = document.querySelector(".alibiList");
// Define ye olde Evente Hubbe
const eventHub = document.querySelector(".container");

eventHub.addEventListener("click", (event) => {
  if (event.target.id === "closeDialog") {
    associatesDialog.close();
  }
});

// export const alibiList = () => {
//   getCriminals().then(() => {
//     let perps = useCriminals();
//     render(perps);
//   });
// };

eventHub.addEventListener("alibiId", (customEvent) => {
  const associatesDialog = document.querySelector("#associatesDialog");
  const dialogText = document.querySelector("#associatesDialog__text");

  const criminals = useCriminals();
  const matchingCriminal = criminals.find(
    (criminal) => criminal.id === parseInt(customEvent.detail.id)
    );
  let stringifyAlibis = alibiHTML(matchingCriminal);
  dialogText.innerHTML = stringifyAlibis

  associatesDialog.showModal();
  // render(matchingCriminal);
});

export const AssociatesDialog = () => {
  return `
    <dialog id="associatesDialog">
      <div id="associatesDialog__text"></div>
      <button id="closeDialog">close</button>
    </dialog>
  `;
};

// const render = (criminals) => {
//   let alibiCards = [];
//   const alibis = criminals.known_associates;
//   for (const alibi of alibis) {
//     alibiCards.push(alibiHTML(alibi));
//   }
//   contentTarget.innerHTML = alibiCards.join("");
// };
