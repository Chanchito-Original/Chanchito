const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Chanchito',
  password: 'Portillo.22',
  port: 5432,
});

module.exports = pool;
