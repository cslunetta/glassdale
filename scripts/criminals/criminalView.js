const eventHub = document.querySelector(".container");
const contentTarget = document.querySelector(".viewSelectorContainer");

eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "criminalView") {
    const viewCriminalEvent = new CustomEvent("showCriminalsClicked");
    eventHub.dispatchEvent(viewCriminalEvent)
  }
});