import { Request, Response } from "express";
import {container, inject} from "tsyringe"
import {CreateMusicUseCase} from "./CreateMusicUseCase"


class CreatMusicController {
    async handle( request: Request, response: Response): Promise<Response>{
        const { name, band } = request.body;
        const createMusicUseCase = container.resolve(CreateMusicUseCase);

        const music = await createMusicUseCase.execute({
            name,
            band
        })

        return response.status(201).json(music);

    }
}

export {CreatMusicController}