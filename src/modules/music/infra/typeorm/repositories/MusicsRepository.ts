import { ICreateMusicDTO } from "modules/music/dtos/ICreateMusicDTO";
import { IMusicRepository } from "modules/music/repositories/IMusicRepository";
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

    async list(): Promise<Music[]>{
        const musics = await this.repository.find()
        return musics;
    }

    
    async findByBandName(band: string ):Promise<Music>{
        const  music = await this.repository.findOne({ band })
        return music;
    }

    async findById(id: string ):Promise<Music>{
        const  music = await this.repository.findOne({ id })
        return music;
    }

    async findByName(name: string ):Promise<Music>{
        const  music = await this.repository.findOne({ name })
        return music;
    }

    async deleteMusicById(id: string ):Promise<void>{
      await this.repository.delete({ id })
     
    }


}

export{MusicsRepository}