// chatgpt refernce: https://chatgpt.com/share/692f0a31-7ca8-800c-a433-599b195f3a65
const dbAsAnyName = require("../db/db");

//w: (start)╭──────────── getUsersWhere ────────────╮
async function getUsersWhere(condition) {
  const getUsersQuery = `
    SELECT * from users
    WHERE ${condition}
`;

  try {
    const result = await dbAsAnyName.query(getUsersQuery);
    return result.rows;
  } catch (error) {
    console.error(error, error.message || " eror in getUsersWhere");
  }
}

//w: (end)  ╰──────────── getUsersWhere ────────────╯

async function getSortedUsers(column, order = "DESC") {
  const getSortedUsersQuery = `
    select * from users
    order by ${column} ${order}
`;
  try {
    const result = await dbAsAnyName.query(getSortedUsersQuery);
    return result.rows;
  } catch (error) {
    console.error(error, error.message || "eror in getSortedUsers");
  }
}

module.exports = {
  getUsersWhere,
  getSortedUsers,
};
