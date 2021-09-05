import { Router } from "express";
import { CreatMusicController } from "modules/music/infra/usecases/createMusic/CreateMusicController";
import { ListMusicsController } from "modules/music/infra/usecases/listMusics/ListMusicsController";

const musicsRoutes = Router();

const createMusicController= new CreatMusicController();
const listMusicsController = new ListMusicsController();


musicsRoutes.get("/",listMusicsController.handle);
musicsRoutes.post("/musics",createMusicController.handle);

export { musicsRoutes };
