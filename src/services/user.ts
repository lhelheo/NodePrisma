import { Prisma } from "@prisma/client";
import { prisma } from "../libs/prisma";

interface createUserProps {
    name: string;
    email: string;
}

export const createUser = async ({ name, email }: createUserProps) => {
    try {
        const user = await prisma.user.create({
            data: { name, email }
        });
        return user;
    } catch (error) {
        return false;
    }
}