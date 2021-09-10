import { Request, Response } from "express";
import {container} from "tsyringe"
import {UpdateMusicUseCase} from "./UpdateMusicUseCase"


class UpdateMusicController {
    async handle( request: Request, response: Response): Promise<Response>{
        const { name, band } = request.body;
        const updateMusicUseCase = container.resolve(UpdateMusicUseCase);

        const music = await updateMusicUseCase.execute({
            name,
            band
        })

        return response.status(201).json(music);

    }
}

export {UpdateMusicController}