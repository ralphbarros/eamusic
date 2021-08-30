import { Request, Response } from "express";


class CreatMusicController {
    async handle( request: Request, response: Response): Promise<void>{
        const { name, band } = request.body;



    }
}

export {CreatMusicController}