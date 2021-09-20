const { Pool } = require("pg");

const pool = new Pool();
//     {
//   user: process.env.PGUSER, //postgres user
//   host: process.env.PGHOST, //localhost (I also tried 127.0.0.1)
//   database: process.env.PGDATABASE, //database name to connect to
//   password: process.env.PGPASSWORD, //postgres user password
//   port: process.env.PGPORT,
// }
// const pool = new Pool({ database: process.env.PGDATABASE})

module.exports = pool;
