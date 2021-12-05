const Pool = require('pg').Pool;
const pool = new Pool({
    user: "postgres",
    password: "secret",
    database: "HSR",
    host: "localhost",
    port: "5432"
});
module.exports = pool;