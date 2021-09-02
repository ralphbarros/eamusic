import 'reflect-metadata';
import { router } from "./routes"
import express from 'express';
//import createConnection from "../../infra/typeorm/index";
import "../../container";

const app = express();

//createConnection();

app.use(express.json());

app.use(router);

        
export {app}