import { ICreateMusicDTO } from "../dtos/ICreateMusicDTO";
import { Music  } from "../infra/typeorm/entities/Music";

interface IMusicRepository{
    create(data:ICreateMusicDTO): Promise<Music>
    findById(id: string): Promise<Music> 
    findByBandName(band: string): Promise<Music> 
    findByName(name: string): Promise<Music> 
    list(): Promise<Music[]>;
    deleteMusicById(id:string): Promise<void>;

}

export {IMusicRepository}