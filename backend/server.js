const express = require('express');
const cors = require('cors');
const app = express();

const port = 9000;
app.use(cors("*"));
app.use(express.json());


let arrayDatas = [];

app.get("/showData", (req, res) => {
    res.json(arrayDatas);
})

app.post("/data", (req, res) => {
    arrayDatas.push(req.body);
    console.log(arrayDatas,"arrayDatas==");
});

app.listen(port, () => {
    console.log("Listning . . . ");
})