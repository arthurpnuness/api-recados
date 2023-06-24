import { appEnv } from "../app/envs/app.env"
import { createServer } from "./config/express.config"


export const runningServer = () => {
    const api = createServer()
    api.listen(appEnv.port, ()=> console.log('listening on port '+appEnv.port))
}