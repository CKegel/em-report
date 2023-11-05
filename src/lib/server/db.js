import pg from 'pg';

const pool = new pg.Pool({
  user: 'root',
  host: 'database',
  database: 'em-report',
  password: 'hackRPIX',
  port: 5432
});

export const connectToDB = async () => await pool.connect();