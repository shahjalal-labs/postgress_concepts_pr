const {
  createUsersTable,
  insertUser,
  getAllUsers,
  updateUser,
} = require("./concepts/basic-queries");

//
require("dotenv").config();

async function testBasicQueries() {
  try {
    // await createUsersTable();
    //   await insertUser("ruhul amin", "ruhul@gmail.com");
    //   await insertUser("sangam mukherjee", "sangam@gmail.com");
    //   await insertUser("sanjay", "sanjay@gmail.com");
    //   await insertUser("hasan", "hasan@gmail.com");
    const result = await getAllUsers();

    console.log(result, "[1;31mresult in main.js at line 18[0m");
    const updateUserResult = await updateUser(
      "sangam@gmail.com",
      "sangam33@gmail.com",
    );
  } catch (error) {
    console.error("Error", error);
  }
}

async function runAllQueries() {
  await testBasicQueries();
}

runAllQueries();
