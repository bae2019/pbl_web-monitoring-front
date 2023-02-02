const express = require("express");
const app     = express();
const PORT    = process.env.PORT || 3301;
const db = require('./db');

app.get("/", (req, res) => {    
    /*const sqlQuery = "SELECT * FROM process_a_tb";

    db.query(sqlQuery, (err, result) => {
        if(!err) res.send({ facA : result });
        else res.send(err);
    });
    */
   res.send("Server Response Success");
});

// 서버 연결 시 발생
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});
