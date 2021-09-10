import { Router } from "express";
import { CreateMusicController } from "modules/music/infra/usecases/createMusic/CreateMusicController";
import { ListMusicsController } from "modules/music/infra/usecases/listMusics/ListMusicsController";
import { UpdateMusicController } from "modules/music/infra/usecases/updateMusic/UpdateMusicController";

const musicsRoutes = Router();

const createMusicController= new CreateMusicController();
const listMusicsController = new ListMusicsController();
const updateMusicController = new UpdateMusicController();

musicsRoutes.get("/",listMusicsController.handle);
musicsRoutes.post("/musics",createMusicController.handle);
musicsRoutes.patch("/musics",updateMusicController.handle);

export { musicsRoutes };
