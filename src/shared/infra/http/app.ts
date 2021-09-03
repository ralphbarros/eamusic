import 'reflect-metadata';
import { router } from "./routes"
import express from 'express';
import "../../container";
import  createConnection from "../../../database"

const app = express();

createConnection();

app.use(express.json());

app.use(router);

        
export {app}