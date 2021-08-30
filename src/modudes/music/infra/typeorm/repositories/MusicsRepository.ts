import { ICreateMusicDTO } from "modudes/music/dtos/ICreateMusicDTO";
import { IMusicRepository } from "modudes/music/repositories/IMusicRepository";
import { getRepository, Repository } from "typeorm";
import { Music } from "../entities/Music";



class MusicsRepository implements IMusicRepository {
private repository: Repository<Music>

constructor(){
    this.repository = getRepository(Music);
}
    async create({id,name,band }: ICreateMusicDTO): Promise<Music> {
       const music = this.repository.create({
           id,
           name,
           band
       });
       await this.repository.save(music);
       return music;
    }

}

export{MusicsRepository}