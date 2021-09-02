import { ICreateMusicDTO } from "modudes/music/dtos/ICreateMusicDTO";
import { IMusicRepository } from "modudes/music/repositories/IMusicRepository";
import { getRepository, Repository } from "typeorm";
import { Music } from "../entities/Music";



class MusicsRepository implements IMusicRepository {
private repository: Repository<Music>

constructor(){
                                                                    
}
    async create({id,name,band }: ICreateMusicDTO): Promise<Music> {
        this.repository = getRepository(Music);  
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