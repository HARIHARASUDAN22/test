const express = require("express")

const app = express()

app.get("/", function (req, res) {
    res.send("hello world")
})


app.listen(4000, (err) => {
    if (err) console.log('Error in server setup');
    console.log('Server is running on port 4000');
});
