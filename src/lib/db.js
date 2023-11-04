// @ts-nocheck
import { Client, Pool } from 'pg';

const pool = new Pool({
  database: import.meta.env.DB_name,
  user: import.meta.env.DB_user,
  host: import.meta.env.DB_host,
  port: (Number(import.meta.env.DB_port || 5432),
});

export const connectToDB = async () => await pool.connect();