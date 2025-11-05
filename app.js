const express = require("express");
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
   res.json('Response') 
});

const PORT = 4000;
app.listen(PORT, (req, res) => {
    console.log(`Online http://localhost:${PORT}`)
})