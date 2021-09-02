import "reflect-metadata"
import { Router } from "express";

import { musicsRoutes} from "./musics.routes";

const router = Router();

router.use(musicsRoutes);

export{router}