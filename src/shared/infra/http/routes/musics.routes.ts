import { Router } from "express";
import { CreatMusicController } from "modudes/music/infra/usecases/createMusic/CreateMusicController";


const musicsRoutes = Router();

const createMusicController= new CreatMusicController();


musicsRoutes.post("/musics",createMusicController.handle)

export { musicsRoutes };