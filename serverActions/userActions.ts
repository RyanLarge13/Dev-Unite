"use server";
import {
  Category,
  PrismaClient,
  Tag,
  User as UserWithTagsAndCats,
} from "@prisma/client";

const prisma = new PrismaClient();

export const getDbUser = async (userId: string) => {
  if (!userId) {
    return {
      message: "You must be logged in.",
      err: true,
      user: null,
    };
  }
  const dbUser = await prisma.user.findUnique({
    where: { id: userId },
    include: { tags: true, categories: true, conversations: true },
  });
  if (!dbUser) {
    return {
      message: "Let's set up your account",
      err: false,
      user: null,
    };
  }
  return {
    message: "Successfully logged in",
    err: false,
    user: dbUser,
  };
};

interface User extends UserWithTagsAndCats {
  tags: Tag[];
  categories: Category[];
}

export const getRelatedDevs = async (user: User) => {
  const tagIds = user.tags.map((tag) => tag.id);
  const catTags = user.categories.map((cat) => cat.id);
  const relatedDevs = await prisma.user.findMany({
    where: {
      AND: [{ id: { not: user.id } }],
      OR: [
        { tags: { some: { id: { in: tagIds } } } },
        { categories: { some: { id: { in: catTags } } } },
      ],
    },
    take: 50,
  });
  return relatedDevs;
};
