import pkg from 'pg';
const { Pool } = pkg;

export const db = new Pool({
  user: "postgres",
  host: "localhost",
  database: "SistemaPostulacion",
  password: "password",
  port: 5432, // default PostgreSQL port is 5432
});