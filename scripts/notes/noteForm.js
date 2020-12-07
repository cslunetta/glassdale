import { saveNote } from "./noteDataProvider.js";

const eventHub = document.querySelector(".container");
const contentTarget = document.querySelector(".noteFormContainer");

const render = () => {
  contentTarget.innerHTML = `
    <input type="text" id="noteAuthor" placeholder="Author">
    <input type="suspect" id="noteSuspect" placeholder="Suspect">
    <textarea id="noteText" placeholder="Add note here..." col="300"></textarea>
    <button id="saveNote">Save Note</button>
  `;
};

eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "saveNote") {
    let noteAuthor = document.querySelector("#noteAuthor").value;
    let noteSuspect = document.querySelector("#noteSuspect").value;
    let noteText = document.querySelector("#noteText").value;
    const newNote = {
      noteAuthor: noteAuthor,
      noteSuspect: noteSuspect,
      noteText: noteText,
      date: Date.now(),
    };
    saveNote(newNote);
  }
});

export const noteForm = () => {
  render();
};
