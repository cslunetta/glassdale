export const criminal = (criminal, facilities) => {
  return `
  <div class="criminal card">  
    <h2>${criminal.name}</h2>
    <div class="criminal_details">
      <p>Crime: ${criminal.conviction}</p>
      <p>Term start: ${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}</p>
      <p>Term end: ${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}</p>
      <p>Age: ${criminal.age}</p>
      <div>
        <h3>Facilities</h3>
        <ul>
          ${facilities.map(f => `<li>${f.facilityName}</li>`).join("")}
        </ul>
      </div>
      <button id="associates--${criminal.id}">Associate Alibis</button>
    </div>
  </div>
  `;
};
