const fs = require("fs/promises");
const path = require("path");
const chalk = require("chalk");

const notesPath = path.join(__dirname, "db.json");

async function addNote(title) {
  const notes = await getNotes();
  console.log(notes);

  const note = {
    title,
    id: Date.now().toString(),
  };
  notes.push(note);

  await fs.writeFile(notesPath, JSON.stringify(notes));
  console.log(chalk.green.inverse("Note was added!"));
}

async function getNotes() {
  const notes = await fs.readFile(notesPath, { encoding: "utf-8" });
  return Array.isArray(JSON.parse(notes)) ? JSON.parse(notes) : [];
}

async function printNotes() {
  const notes = await getNotes();

  console.log(chalk.blue.inverse("Here is the list of notes: "));
  notes.forEach((note) => {
    console.log(chalk.blue(note.title) + ": " + chalk.green(note.id));
  });
}

async function removeNotes(id) {
  const notes = await getNotes();
  const removeNotes = notes.filter((n) => n.id !== id);
  await fs.writeFile(notesPath, JSON.stringify(removeNotes));

  console.log(chalk.bgBlackBright(`remove id: ${id}`));
}
async function editNotes(title, id) {
  const notes = getNotes();
  const editNewNotes = (await notes).map((e) =>
    e.id === id ? { ...e, title: title } : e
  );
  await fs.writeFile(notesPath, JSON.stringify(editNewNotes));
}

module.exports = {
  addNote,
  getNotes,
  printNotes,
  removeNotes,
  editNotes,
};
