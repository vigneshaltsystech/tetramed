const express = require("express");

const app = express();

app.use(express.json());

app.use("/", require("./routes"));

const PORT = process.env.PORT || 3000;

const run = async () => {
    app.listen(PORT, () => {
        console.log(`🚀 Server is now running on Port: ${PORT} `);
    });
};

run().catch((err) => {
    console.error(err);
    console.error(`ESIGTERM: shutting down the server`);
    process.exit(1);
});
