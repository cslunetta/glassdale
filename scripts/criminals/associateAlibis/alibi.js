export const alibiHTML = (criminal) => {
  return `
    <section class="alibiCard">
      <h2>Associates of: ${criminal.name}
      ${criminal.known_associates.map((associate) => {
        return `
        <h3>Name: ${associate.name}</h3>
        <div>Alibi: ${associate.alibi}</div>`;
      }).join("")}
    </section>
  `;
};
