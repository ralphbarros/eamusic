import { IMusicRepository } from "modules/music/repositories/IMusicRepository";
import { inject, injectable } from "tsyringe";
import { Music } from "../../typeorm/entities/Music";

@injectable()
class ListMusicsUseCase{
    constructor(
        @inject("MusicsRepository")
        private musicsRepository: IMusicRepository
    ){}

    async execute():Promise<Music[]>{
       
        const musics = await this.musicsRepository.list();
        return musics;
    }

}

export { ListMusicsUseCase }