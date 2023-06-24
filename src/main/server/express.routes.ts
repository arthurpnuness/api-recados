import {Express} from 'express';

export const makeRoutes = (app:Express) => {
    app.get('/',(req, res)=>res.send(`<h1> Api de recados </h1>`))
}