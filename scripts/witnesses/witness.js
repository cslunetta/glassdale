export const witness = (witness) => {
  return `
  <article class = "witness card">
    <h2>${witness.name}</h2>
    <div> Statement: ${witness.statements}</div>
  </article>
  `
}