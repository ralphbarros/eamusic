import express from "express";
import { musicsRoutes } from "./routes/musics.routes";

const app = express();

app.use(express.json());


app.use(musicsRoutes)
app.listen(3333, () => console.log("Server is running!!"));