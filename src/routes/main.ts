import { Router } from 'express';
import { createUser } from '../services/user';

export const mainRouter = Router();

mainRouter.get('/ping', (req, res) => {
    res.json({ pong: true });
});

mainRouter.get("/test", (req, res) => {
    res.json({ testado: true });
});

mainRouter.post("/user", async (req, res) => {
    const user = await createUser({
        name: "Leonardo",
        email: "leonardo@gmail.com"
    })
    res.json({ user });
})