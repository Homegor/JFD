// const http = require("http");
// const fs = require("fs/promises");
// const basePath = path.join(__dirname, "pages");

/*
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
*/
/*
const servers = http.createServer(async (req, res) => {
  if (req.method === "GET") {
    const content = await fs.readFile(path.join(basePath, "index.ejs"));
    // res.setHeader("Content-Type", "text/html");
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    res.end(content);
  } else if (req.method === "POST") {
    const body = [];
    res.writeHead(200, {
      "Content-Type": "text/plain; charset=utf-8",
    });
    req.on("data", (data) => {
      body.push(Buffer.from(data));
    });
    req.on("end", () => {
      const title = body.toString().split("=")[1].replaceAll("+", " ");
      addNote(title);
      res.end(`Title = ${title}`);
    });
  }
});
*/

const chalk = require("chalk");
const path = require("path");
const {
  addNote,
  getNotes,
  removeNotes,
  editNotes,
} = require("./notes.controller");
const express = require("express");

const port = 3000;
const app = express();

app.set("view engine", "ejs");
app.set("views", "pages");

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.static(path.resolve(__dirname, "public")));

app.get("/", async (req, res) => {
  res.render("index", {
    title: "Express App",
    notes: await getNotes(),
    created: false,
  });
});
app.post("/", async (req, res) => {
  await addNote(req.body.title);
  res.render("index", {
    title: "Express App",
    notes: await getNotes(),
    created: true,
  });
});
app.delete("/:id", async (req, res) => {
  await removeNotes(req.params.id);
  res.render("index", {
    title: "Express App",
    notes: await getNotes(),
    created: false,
  });
  app.put("/:id", async (req, res) => {
    await editNotes(req.params.id, req.params.title);
    res.render("index", {
      title: "Express App",
      notes: await getNotes(),
      created: true,
    });
  });
});
app.listen(port, () => {
  console.log(chalk.green(`Server has been started on port: ${port}...`));
});
