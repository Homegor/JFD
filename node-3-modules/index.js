const yargs = require("yargs");
const pkg = require("./package.json");
const { addNote, printNotes, removeNotes } = require("./notes.controller");

yargs.version(pkg.version);
yargs.command({
  command: "add",
  describe: "Add new note to list",
  builder: {
    title: {
      type: "string",
      describe: "Note title",
      demandOption: true,
    },
  },
  handler({ title }) {
    addNote(title);
  },
});
yargs.command({
  command: "list",
  describe: "Print all note",
  async handler() {
    printNotes();
  },
});
yargs.command({
  command: "remove ",
  describe: "Remove note by id",
  builder: {
    title: {
      type: "string",
      describe: "Remove note by id: ",
      demandOption: true,
    },
  },
  handler({ id }) {
    removeNotes(id);
  },
});

yargs.parse();
