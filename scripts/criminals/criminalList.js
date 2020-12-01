import { getCriminals, useCriminals } from "./criminalDataProvider.js";
import { criminal } from "./criminal.js";

export const criminalList = () => {
  getCriminals().then(() => {
    const contentElement = document.querySelector(".criminalsContainer");
    const criminals = useCriminals();

    for (const criminalInfo of criminals) {
      const criminalHTML = criminal(criminalInfo);
      contentElement.innerHTML += criminalHTML;
    }
  });
};
