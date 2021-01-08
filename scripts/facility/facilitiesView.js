const eventHub = document.querySelector(".container");
const contentTarget = document.querySelector(".viewSelectorContainer");

eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "facilityView") {
    const customEvent = new CustomEvent("showFacilitiesClicked");
    eventHub.dispatchEvent(customEvent);
  }
});
