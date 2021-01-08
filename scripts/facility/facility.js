export const facility = (facility, criminals) => {
  return `
  <div class="facility card">
    <h2>${facility.facilityName}</h2>
    <div class="facility__details">
      <p>Security: ${facility.securityLevel}</p>
      <p>Capacity: ${facility.capacity}</p>
    </div>
    <div class="facility__criminals">
      <h3>Criminals</h3>
      <ul>
        ${criminals.map((criminal) => `<li>${criminal.name}</li>`).join("")}
      </ul>
    </div>
  </div>
  `;
};
