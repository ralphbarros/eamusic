import { ICreateMusicDTO } from "../../../dtos/ICreateMusicDTO";
import { Music  } from "../entities/Music";

interface IMusicRepository{
    create(data:ICreateMusicDTO): Music
}

export {IMusicRepository}