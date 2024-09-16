import { prisma } from "../libs/prisma";

interface createUserProps {
    name: string;
    email: string;
}

export const createUser = async ({ name, email }: createUserProps) => {
    const user = await prisma.user.create({
        data: { name, email }
    })
    return user;
}