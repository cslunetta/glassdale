export const criminal = (criminal, facilities) => {
  return `
  <div class="criminal card">
    <h2>${criminal.name}</h2>
    
    <div class="criminal_details">
      <div<(Age: ${criminal.age})</div>
      <div>Crime: ${criminal.conviction}</div>
      <p>Term start: ${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}</p>
      <p>Term end: ${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}</p>
      <div class="facility_details">
        
      <h3>Facilities</h3>
        <ul>
          ${facilities.map(f => `<li>${f.facilityName}</li>`).join("")}
        </ul>
      </div>
      
      <h3>Arresting Officer</h3>
        <p>${criminal.arrestingOfficer}</p>

      <button id="associates--${criminal.id}">Associate Alibis</button>
    </div>
  </div>
  `;
};
