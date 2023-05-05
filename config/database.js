const mysql = require("mysql2");

// const pool = mysql.createPool({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "orders",
// });

const pool = mysql.createPool({
    host: "166.62.26.44",
    user: "tetramed_service",
    port: 3306,
    password: "boseslIII54",
    database: "tetramed_db",
});

const promisePool = pool.promise();

const checkDatabaseConnection = async () => {
    const [gigs] = await promisePool.query(`SELECT 1`);
    if (gigs.length) console.log("💾 Database connection successful!");
};

exports.promisePool = promisePool;
