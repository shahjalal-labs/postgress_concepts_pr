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
  } catch (error) {}
}

//w: (end)  ╰──────────── getUsersWhere ────────────╯

module.exports = {
  getUsersWhere,
};
