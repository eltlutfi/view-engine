const express = require("express");

const app = express();
const port = 3000;

const users = [];

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/salam", (req, res) => {
    const namaDariQuery = req.query.nama || "Tidak ada nama";

    res.render("salam", {
        nama: namaDariQuery,
    });
});

app.get("/register", (req, res) => {
    res.render("register");
});

app.post("/register", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    users.push({
        email: email,
        password: password,
    });

    console.log(users);

    res.redirect("/register");
});

app.get("/jumlah-user", (req, res) => {
    res.send(`Jumlah user ${users.legth}`);
});

app.get("/jumlah-user-json", (req, res) => {
    res.json(users);
});

app.get("/tampilkan-user-", (req, res) => {
    res.render("users", {
        users, 
    });
});



app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
});