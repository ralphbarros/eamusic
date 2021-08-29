import express from "express";
import { musicsRoutes } from "../../../routes/musics.routes";
//import createConnection from "../typeorm"


const app = express();

//createConnection();


app.use(express.json());


app.use(musicsRoutes)
app.listen(3333, () => console.log("Server is running!!"));