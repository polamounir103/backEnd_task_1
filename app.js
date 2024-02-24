const fs = require("fs");
const yargs = require("yargs");
const personData = require("./presonData");

yargs.command({
  command: "add",
  describe: "Add a person",
  bulider: {
    fname: {
      describe: "the first name of the person",
      demandOption: true,
      type: "string",
    },
    lname: {
      describe: "this is Last name",
      demandOption: true,
      type: "string",
    },
    age: {
      describe: "the age of the person",
      demandOption: true,
      type: "number",
    },
  },
  handler: (person) => {
    personData.addPerson(person.id,person.fname , person.lname , person.age , person.city);
  },
});

yargs.command({
  command:"delete",
  bulider:{
    id : {
      describw: "ID of the person",
      demandOption: true,
    }
  },
  handler: (person) => {
    personData.deletePerson(person.id);
  },
})
yargs.command({
  command:"read",
  bulider:{
    id : {
      describw: "ID of the person",
      demandOption: true,
    }
  },
  handler: (person) => {
    personData.searchPerson(person.id);
  },
})

yargs.command({
  command:"list",
  handler: () => {
    personData.listPerson();
  }
})



yargs.parse();
