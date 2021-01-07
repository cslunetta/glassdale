import { saveNote } from "./noteDataProvider.js";
import {
  getCriminals,
  useCriminals,
} from "../criminals/criminalDataProvider.js";

const eventHub = document.querySelector(".container");
const contentTarget = document.querySelector(".noteFormContainer");

eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "saveNote") {
    let noteAuthor = document.querySelector("#noteAuthor").value;
    let noteSuspect = parseInt(document.querySelector("#noteForm--criminal").value);
    let noteText = document.querySelector("#noteText").value;

    const newNote = {
      author: noteAuthor,
      criminalId: noteSuspect,
      text: noteText,
      timestamp: Date.now(),
    };
    saveNote(newNote);
  }
});

const render = () => {
  const criminalsCollection = useCriminals();
  contentTarget.innerHTML = `
    <input type="text" id="noteAuthor" placeholder="Author">
    <select id="noteForm--criminal" class="criminalSelect">
      <option value="0">Please select a suspect...</option>
      ${criminalsCollection.map(
        (criminal) => `
          <option value="${criminal.id}">${criminal.name}</option>
        `
      )}
    </select>
    <textarea id="noteText" placeholder="Add note here..."></textarea>
    <button id="saveNote">Save Note</button>
  `;
};

export const noteForm = () => {
  getCriminals().then(() => render());
};
