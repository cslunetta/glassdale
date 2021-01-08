import { criminalList } from "./criminals/criminalList.js";
import { convictionSelect } from "./convictions/convictionSelect.js";
import { officerSelect } from "./officers/OfficerSelect.js";
import { noteForm } from "./notes/noteForm.js";
import { ShowNoteButton } from "./notes/showNotesButton.js";
import "./notes/noteList.js";
import "./criminals/associateAlibis/alibisButton.js";
import "./criminals/associateAlibis/alibiList.js";
import "./witnesses/witnessView.js";
import "./witnesses/witnessList.js";
import "./criminals/criminalView.js"
import "./facility/facilitiesList.js"
import "./facility/facilitiesView.js"

criminalList();
convictionSelect();
officerSelect();
noteForm();
ShowNoteButton();