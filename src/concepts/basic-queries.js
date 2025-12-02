//
const db = require("../db/db");
//
//w: (start)╭──────────── createUsersTable ────────────╮
async function createUsersTable() {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(50)  UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
)
`;

  try {
    await db.query(createTableQuery);
    console.log("Users table created successfully");
  } catch (error) {
    console.error("Error while creating users table", error);
  }
}
//w: (end)  ╰──────────── createUsersTable ────────────╯

//w: (start)╭──────────── insertUser ────────────╮
const insertUser = async (username, email) => {
  const insertUserQuery = `
    INSERT INTO users (username, email)
    VALUES ($1, $2)
    RETURNING *
  `;

  try {
    const res = await db.query(insertUserQuery, [username, email]);
    console.log("User inserted successfully", res.rows);
    return res.rows;
  } catch (error) {
    console.error("Error while inserting user", error);
  }
};
//w: (end)  ╰──────────── insertUser ────────────╯

//w: (start)╭──────────── getAllUsers ────────────╮
async function getAllUsers() {
  const getAllUsersQuery = `
    SELECT * FROM users
`;
  try {
    const res = await db.query(getAllUsersQuery);
    return res.rows;
  } catch (error) {
    console.error("Error", error);
  }
}
//w: (end)  ╰──────────── getAllUsers ────────────╯

//w: (start)╭──────────── updateUser ────────────╮
const updateUser = async (email, newEmail) => {
  const updateUserQuery = `
    UPDATE users
    SET email = $2
    WHERE email = $1
    RETURNING *
`;

  try {
    const res = await db.query(updateUserQuery, [email, newEmail]);
    if (res.rows.length) {
      console.log("User updated successfully!", res.rows);
      return res.rows;
    } else {
      console.log(`No email found with ${email}`);
      return null;
    }
  } catch (error) {
    console.error(error, "[1;31merror in basic-queries.js at line 60[0m");
  }
};
//w: (end)  ╰──────────── updateUser ────────────╯

const deleteQuery = async (username) => {
  const deleteQuery = `
    DELETE FROM users
    WHERE username = $1
    RETURNING *
`;

  try {
    const res = await db.query(deleteQuery, [username]);
    if (res.rows.length) {
      console.log("User deleted successfully!", res.rows);
      return res.rows;
    } else {
      console.log(`No user found with ${username}`);
      return null;
    }
  } catch (error) {
    console.error(error, "[1;31merror in basic-queries.js at line 89[0m");
  }
};

module.exports = {
  createUsersTable,
  insertUser,
  getAllUsers,
  updateUser,
  deleteQuery,
};
