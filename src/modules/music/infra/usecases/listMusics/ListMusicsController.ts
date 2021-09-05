import { Request, Response } from "express";
import {container} from "tsyringe"
import {ListMusicsUseCase} from "./ListMusicsUseCase"


class ListMusicsController {
    async handle( request: Request, response: Response): Promise<Response>{
    
        const listMusicsUseCase = container.resolve(ListMusicsUseCase);

        const allMusics = await listMusicsUseCase.execute();
        return response.status(201).json(allMusics);


    }
}

export{ListMusicsController}