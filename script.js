let express = require("express");
let app = express();
const port = 8080;
app.listen(port, () => {
    console.log(`server is running at port ${port}`);
});
app.get("/", (req, res) => {
    res.send("<h1>hello this is insta</h1>");
});