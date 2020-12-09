import { getNotes, useNotes } from "./noteDataProvider.js";
import { NoteHTMLConverter } from "./note.js";

// Query the DOM for the element that your notes will be added to
const contentTarget = document.querySelector(".noteList");
// Define ye olde Evente Hubbe
const eventHub = document.querySelector(".container");

eventHub.addEventListener("showNotesClicked", (customEvent) => {
  NoteList();
});

// if db is updated with a new note update noteList
eventHub.addEventListener("noteStateChanged", (customEvent) => {
  NoteList();
});

const render = (noteArray) => {
  const allNotesConvertedToStrings = noteArray
    .map(
      // convert the notes objects to HTML with NoteHTMLConverter
      (noteObject) => {
        return NoteHTMLConverter(noteObject);
      }
    )
    .join("");
  contentTarget.innerHTML = allNotesConvertedToStrings;
};

// Standard list function you're used to writing by now. BUT, don't call this in main.js! Why not?
export const NoteList = () => {
  getNotes().then(() => {
    const allNotes = useNotes();
    render(allNotes);
  });
};