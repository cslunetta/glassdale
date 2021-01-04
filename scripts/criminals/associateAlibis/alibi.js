export const alibiHTML = (alibi) => {
  return `
    <section class="alibiCard">
      <h2>Known Associate: ${alibi.name}</h2>
      <div>Alibi: ${alibi.alibi}</div>
    </section>
  `;
};
