import { getNotes, useNotes, deleteNote } from "./noteDataProvider.js";
import { NoteHTMLConverter } from "./note.js";
import { useCriminals } from "../criminals/criminalDataProvider.js";

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

eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id.startsWith("deleteNote--")) {
    const [prefix, id] = clickEvent.target.id.split("--");

    /*
            Invoke the function that performs the delete operation.

            Once the operation is complete you should THEN invoke
            useNotes() and render the note list again.
        */
    deleteNote(id).then(() => {
      const updatedNotes = useNotes();
      const criminals = useCriminals();
      render(updatedNotes, criminals);
    });
  }
});

const render = (noteArray, criminals) => {
  // convert the notes objects to HTML with NoteHTMLConverter
  const allNotesConvertedToStrings = noteArray
    .map((note) => {
      const associatedCriminal = criminals.find((criminal) => {
        return criminal.id === note.criminalId;
      });

      note.criminalName = associatedCriminal.name;
      return NoteHTMLConverter(note);
    })
    .join("");
  contentTarget.innerHTML = allNotesConvertedToStrings;
};

// Standard list function you're used to writing by now. BUT, don't call this in main.js! Why not?
const NoteList = () => {
  let criminals = useCriminals();
  getNotes().then(() => {
    const allNotes = useNotes();
    render(allNotes, criminals);
  });
};
