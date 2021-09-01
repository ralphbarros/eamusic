import { container } from "tsyringe";

import { IMusicRepository } from "../../modudes/music/repositories/IMusicRepository"
import { MusicsRepository } from "../../modudes/music/infra/typeorm/repositories/MusicsRepository"

container.registerSingleton<IMusicRepository>(
    "MusicsRepository",
    MusicsRepository
)