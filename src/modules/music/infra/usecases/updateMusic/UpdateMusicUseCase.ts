import { IMusicRepository } from "modules/music/repositories/IMusicRepository";
import { inject, injectable } from "tsyringe";
import { Music } from "../../typeorm/entities/Music";


interface IRequest {
    name: string;
    band: string;
    
}

@injectable()
class UpdateMusicUseCase {
    constructor(
        @inject("MusicsRepository")
        private musicsRepository: IMusicRepository
    ){}

    async execute({name,band}:IRequest): Promise<Music | string> {
        const musicAlreadyExists = await this.musicsRepository.findByName(name);
        if(musicAlreadyExists){   //do delete and recreate
                await this.musicsRepository.deleteMusicById(musicAlreadyExists.id)
                const music = await this.musicsRepository.create({
                    name,
                    band
                })
                return music
         }
         else{ 
                return "No Music found!"
        }
            
    }

}

export {UpdateMusicUseCase}