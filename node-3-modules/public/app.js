document.addEventListener("click", (e) => {
  if (e.target.dataset.type === "remove") {
    const id = e.target.dataset.id;

    remove(id).then(() => {
      e.target.closest("li").remove();
    });
  }
  if (e.target.dataset.type === "edit") {
    const id = e.target.dataset.id;

    edit(id).then(() => {
      e.target.closest("li").querySelector("p").textContent = prompt(
        "Edit",
        e.target.closest("li").querySelector("p").textContent
      );
    });
  }
});

async function remove(id) {
  await fetch(`/${id}`, {
    method: "DELETE",
  });
}
async function edit(id) {
  await fetch(`/${id}`, {
    method: "PATCH",
  });
}
