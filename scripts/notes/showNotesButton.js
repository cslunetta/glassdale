const contentTarget = document.querySelector(".noteListButton");
const eventHub = document.querySelector(".container");

eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "showNotes") {
    const customEvent = new CustomEvent("showNotesClicked");
    eventHub.dispatchEvent(customEvent);
  }
});

export const ShowNoteButton = () => {
  contentTarget.innerHTML = "<button id='showNotes'>Show Notes</button>";
  // update to switch to hide notes if notes are showing.
  // contentTarget.innerHTML = "<button id='showNotes'>Show Notes</button>";
};
