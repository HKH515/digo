const express = require("express");
const app = express();

app.get('/', (req, res) => res.send("Mofo what you doing on my turf, this is my corner homie"));

app.listen(80);
