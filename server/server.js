const express = require("express");
const fs = require("fs");

const app = express();
const port = 3000;

app.use(express.json());

app.post("/saveData", (req, res) => {
    const formData = req.body;

    // Save the form data to a text file
    fs.appendFile("formData.txt", JSON.stringify(formData) + "\n", (err) => {
        if (err) {
            console.error(err);
            res.status(500).send("Error saving data");
        } else {
            console.log("Data saved successfully");
            res.send("Data saved successfully");
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
