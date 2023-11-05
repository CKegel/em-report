import { Client, Pool } from "pg";

// connection pool to datbase
const pool = new Pool({
  database: import.meta.env.DB_name || "root",
  user: import.meta.env.DB_user || "admin",
  host: import.meta.env.DB_host || "localhost",
  port: Number(import.meta.env.DB_port || 5432),
});

// returns a client from the connection pool
export const connectToDB = async () => await pool.connect();

// this page is to be imported in the server hooks to
// pass a DB connection to any requests