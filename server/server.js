const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = {
    origin: ["http://localhost:5173"]
}
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const Chapter = require('./models/chapter');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => {
    console.log("connection open!")
  })
  .catch(err => {
    console.log("Error!")
    console.log(err)
  })
}

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(cors(corsOptions));


app.listen(8080, () => {
    console.log("Server stated on port 8080");
});

app.get("/api", (req, res) => {
    res.json({fruits: ["apple", "orange", "bananas"]});
});

// app.get('/chapters', (req, res) => {
//   res.render("/chapters")
// })

app.post('/chapters', async (req, res) => {
    console.log(req.body)
    console.log('post sent')
})