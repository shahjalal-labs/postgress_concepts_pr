//
const {
  createUsersTable,
  insertUser,
  getAllUsers,
  updateUser,
  deleteQuery,
} = require("./concepts/basic-queries");
const { getUsersWhere } = require("./concepts/filtering-sorting");

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
    /* const updateUserResult = await updateUser(
      "sangam@gmail.com",
      "sangam33@gmail.com",
    ); */

    // const deleteUserResult = await deleteQuery("hasan");
    // console.log(deleteUserResult, "[1;31mresult in main.js at line 22[0m");
  } catch (error) {
    console.error("Error", error);
  }
}

async function testFilteringSorting() {
  try {
    const sortedResult = await getUsersWhere("username LIKE 'r%'");
    console.log(sortedResult, "[1;31msortedResult in main.js at line 39[0m");
  } catch (error) {}
}

async function runAllQueries() {
  await testBasicQueries();
  await testFilteringSorting();
}

runAllQueries();
