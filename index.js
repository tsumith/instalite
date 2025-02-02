const express = require("express");
const { v4: uuidv4 } = require("uuid");
const app = express();
const port = 8080;
const path = require("path");
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.listen(port, () => {
    console.log(`listening to port ${port}`);
});
app.get("/", (req, res) => {
    res.send("<h1>everything is working</h1>");
});
let posts = [
    {
        id: uuidv4(),
        username: "sumith",
        content: "this is first user"
    },
    {
        id: uuidv4(),
        username: "batman",
        content: "batman loves gotham"
    },
    {
        id: uuidv4(),
        username: "joker",
        content: "joker hates gotham"
    }
]
app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
});
app.get("/posts/new", (req, res) => {
    res.render("new.ejs");

});

app.post("/posts", (req, res) => {
    let { username, content } = req.body;
    let id = uuidv4();
    posts.push({ id, username, content });
    res.redirect("posts");

});

app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("show.ejs", { post });
});
// app.get("show", (req, res) => {
//     res.render("show", posts);
// });