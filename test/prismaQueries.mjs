import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getUsers = async () => {
  const users = await prisma.user.findMany();
  console.log(users);
};

getUsers();
