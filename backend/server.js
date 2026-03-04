const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 5000;

app.post("/login", (req, res) => {

    const { username, password } = req.body;

    // Basic credential validation
    if (username === "admin" && password === "admin") {

        return res.status(200).json({
            success: true,
            message: "Login successful"
        });

    } else {

        return res.status(401).json({
            success: false,
            message: "Invalid username or password"
        });

    }

});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});