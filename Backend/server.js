const express = require("express");
const cors = require("cors");
const{ readdirSync } = require("fs")
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
dotenv.config()

const app = express();
app.use(express.json());
app.use(cors());


readdirSync("./routes").map((r)=>app.use('/', require('./routes/' +r)));

//Database
mongoose.connect(process.env.DATABASE_URL, {})
.then(()=>console.log("Database Connected Successfully"))
.catch((err)=>console.log("error connecting to mongodb", err))


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
