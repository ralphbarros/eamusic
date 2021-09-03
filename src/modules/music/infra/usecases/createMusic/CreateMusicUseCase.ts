import { IMusicRepository } from "modules/music/repositories/IMusicRepository";
import { inject, injectable } from "tsyringe";
import { Music } from "../../typeorm/entities/Music";


interface IRequest {
    name: string;
    band: string;
    
}

@injectable()
class CreateMusicUseCase {
    constructor(
        @inject("MusicsRepository")
        private musicsRepository: IMusicRepository
    ){}

    async execute({name,band}:IRequest): Promise<Music> {

    const music = await this.musicsRepository.create({
        name,
        band
    })


    return music
    }



}

export {CreateMusicUseCase}