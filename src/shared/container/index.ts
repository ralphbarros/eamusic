import { container } from "tsyringe";

import { IMusicRepository } from "../../modules/music/repositories/IMusicRepository"
import { MusicsRepository } from "../../modules/music/infra/typeorm/repositories/MusicsRepository"

container.registerSingleton<IMusicRepository>(
    "MusicsRepository",
    MusicsRepository
)