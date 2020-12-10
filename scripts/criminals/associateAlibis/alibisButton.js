const eventHub = document.querySelector(".container");

eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id.startsWith("associates--")) {
    const [prefix, criminalId] = clickEvent.target.id.split("--");
    const alibiIdEvent = new CustomEvent("alibiId", {
      detail: {
        id: criminalId,
      },
    });
    eventHub.dispatchEvent(alibiIdEvent);
  }
});
