import { Router } from "express";
import {v4 as uuidV4} from "uuid";
import { ICreateMusicDTO } from "../modudes/music/dtos/ICreateMusicDTO";

const musicsRoutes = Router();

const musics:ICreateMusicDTO[] = [];

musicsRoutes.post("/musics",(request,response) => {
    const { name, band} = request.body;

    const music:ICreateMusicDTO = {
        id: uuidV4(),
        name,
        band,
        created_at: new Date()
    }

    musics.push(music);

    return response.status(201).send();

})

export { musicsRoutes };
