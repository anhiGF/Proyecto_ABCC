'use strict';
const { Pool } = require('pg');

const conexion = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // Recomendado en Render
  }
});

module.exports = conexion;
