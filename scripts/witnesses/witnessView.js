const eventHub = document.querySelector(".container");
const contentTarget = document.querySelector(".viewSelectorContainer");

eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "witnessView") {
    const customEvent = new CustomEvent("showWitnessesClicked");
    eventHub.dispatchEvent(customEvent);
  }
});

export const showWitnessButton = () => {
  contentTarget.innerHTML = `<button id="witnessView">Show Witnesses</button>`;
};
