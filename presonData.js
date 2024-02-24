const fs = require("fs");
////////////////////////////////////////////////////////////////
const loadData = () => {
  try {
    const loadedData = fs.readFileSync("personData.json").toString();
    return JSON.parse(loadedData);
  } catch {
    return [];
  }
};

const saveAllData = (allData) => {
  const saveAllData = JSON.stringify(allData);
  fs.writeFileSync("personData.json", saveAllData);
};
////////////////////////////////////////////////////////////////

const addPerson = (id, fname, lname, age, city) => {
  const allData = loadData();

  const isduplicated = allData.filter((obj) => {
    return obj.id === id;
  });
  // console.log(isduplicated);
  if (isduplicated.length > 0) {
    console.log("Person is already added");
  } else {
    allData.push({
      id: id,
      fname: fname,
      lname: lname,
      age: age,
      city: city,
    });

    console.log("Person added successfully");
  }
  // console.log(allData);
  saveAllData(allData);
};
////////////////////////////////////////////////////////////////

const deletePerson = (id) => {
  const allData = loadData();
  const modifiedData = allData.filter((obj) => {
    return obj.id !== id;
  });

  saveAllData(modifiedData);
  console.log(modifiedData);
};
////////////////////////////////////////////////////////////////

const searchPerson = (id) => {
  const allData = loadData();
  const searchedData = allData.find((obj) => {
    return obj.id === id;
  });

  if (searchedData) {
    console.log("The ID is :", searchedData.id);
    console.log("The name is :", searchedData.fname, searchedData.lname);
    console.log("The age is :", searchedData.age);
    console.log("The city is :", searchedData.city);
  } else {
    console.log("User Not found");
  }
};
////////////////////////////////////////////////////////////////

const listPerson = () => {
  const allData = loadData();
  allData.forEach((person) => {
    console.log(person.fname, person.lname, person.age, person.city);
  });
};
///////////////////////////////////////////////////////////////////

module.exports = {
  addPerson,
  deletePerson,
  searchPerson,
  listPerson,
};
