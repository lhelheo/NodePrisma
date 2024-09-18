import { Router } from 'express';
import { createUser, createUsers } from '../services/user';

export const mainRouter = Router();

mainRouter.get('/ping', (req, res) => {
    res.json({ pong: true });
});

mainRouter.get("/test", (req, res) => {
    res.json({ testado: true });
});

mainRouter.post("/user", async (req, res) => {
    const user = await createUser({
        name: "teste2",
        email: "teste2@gmail.com",
        posts: {
            create: {
                title: "Post do Teste2",
                body: "Corpo de teste"
            }
        }
    })
    if (user) {
        res.status(201).json({ user });
    }
    else {
        res.status(500).json({ error: "Error email already exists" });
    }
})

mainRouter.post("/users", async (req, res) => {
    const result = await createUsers([]);
    res.json({ result });
})