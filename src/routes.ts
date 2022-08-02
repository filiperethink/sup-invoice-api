import { Request, Response } from "express";

import { PrismaClient } from "@prisma/client";
const prismaInstance = new PrismaClient();

import { Router } from "express";

const router = Router();

export const getUsers = async (req: Request, res: Response) => {
  const user = await prismaInstance.user.findMany({
    orderBy: {
      id: "desc",
    },
    include: {
      profile: true,
    },
  });
  res.json(user);
};

router.get("/user", getUsers);
export { router };
