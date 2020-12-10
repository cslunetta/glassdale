import { criminalList } from "./criminals/criminalList.js";
import { convictionSelect } from "./convictions/convictionSelect.js";
import { officerSelect } from "./officers/OfficerSelect.js";
import { noteForm } from "./notes/noteForm.js";
import { ShowNoteButton } from "./notes/showNotesButton.js";
import "./notes/noteList.js";
import "./criminals/associateAlibis/alibisButton.js";
import "./criminals/associateAlibis/alibiList.js";

criminalList();
convictionSelect();
officerSelect();
noteForm();
ShowNoteButton();
