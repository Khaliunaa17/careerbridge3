import mysql from "mysql2";

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "1234",   // ← 본인 MySQL 비번
  database: "career_bridge"
});

export default db.promise();
