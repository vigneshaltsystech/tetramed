const { promisePool: pool } = require("../../../config/database");

async function validateUser({ email, password }) {
    if (!email || !password) {
        // return {
        //     error: true,
        //     message: "Invalid Email/Password.",
        // };
        return {
            error: true,
            message: password,
        };
        
    }

    //const query = `SELECT * FROM users WHERE email = '${email}' AND password = '${password}'`;
    const query = `SELECT * FROM user_details_tbl WHERE user_name = '${email}' AND password = '${password}'`;

    const [rows] = await pool.query(query);

    console.log(rows);

    if (!rows.length) {
        return {
            error: true,
            message: "Invalid Email/Password.",
        };
    }

    return {
        error: false,
        message: "User Found.",
        data: { id: rows[0].id },
    };
}

module.exports = { validateUser };
