const express = require("express"); // express importado
const cors = require("cors");
const routes = require("./routes"); // arquivo routes importado

const app = express(); // app usa express

app.use(cors());
app.use(express.json()); // app usa json() do express
app.use(routes); // app usa o arquivo routes

app.listen(3333); // app escuta a porta 3333
