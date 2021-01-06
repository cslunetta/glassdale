import { witness } from "./witness.js";
import { getWitnesses, useWitnesses } from "./witnessProvider.js";

// eventhub and location for rendering html
const eventHub = document.querySelector(".container");
const witnessElement = document.querySelector(".criminalsContainer");
const showCriminalElement = document.querySelector(".viewSelectorContainer")

eventHub.addEventListener("showWitnessesClicked", (event) => {
  witnessList();
});

const witnessList = () => {
  getWitnesses().then(() => {
    const witnesses = useWitnesses();
    render(witnesses);
    showCriminalElement.innerHTML = `
    <h1>Witness Statements</h1>
    <button id="criminalView">Show Criminals</button>
    `
  });
};

const render = (witnesses) => {
  let witnessCards = [];
  for (const person of witnesses) {
    witnessCards.push(witness(person));
  }
  witnessElement.innerHTML = witnessCards.join("");
};