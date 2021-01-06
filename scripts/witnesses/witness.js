export const witness = (witness) => {
  return `
  <article class = "witness card">
    <h2>${witness.name}</h2>
    <div> Statements: ${witness.statements}</div>
  </article>
  `
}