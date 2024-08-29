"use server";
import prismaClient from "@/lib/prismaClient";
import { currentUser } from "@clerk/nextjs/server";
import { Category, Tag, User as UserWithTagsAndCats } from "@prisma/client";

export const getDbUser = async (userId: string) => {
  if (!userId) {
    return {
      message: "You must be logged in.",
      err: true,
      user: null,
    };
  }
  const dbUser = await prismaClient.user.findUnique({
    where: { userId: userId },
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
  const relatedDevs = await prismaClient.user.findMany({
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

export const submitUserProfile = async (data: FormData) => {
  const user = await currentUser();
  if (!user) {
    console.log("no user");
    return false;
  }
  let newAvatar = data.get("avatar") as File | string;
  let newEmail = data.get("email") as string;
  let newUsername = data.get("username") as string;
  const newGithub = data.get("github") as string;
  const newPosition = data.get("position") as string;
  const help = data.get("help") as string;
  const looking = data.get("looking") as string;
  const newBio = data.get("bio") as string;
  // console.log(
  //   newAvatar,
  //   newUsername,
  //   newEmail,
  //   newGithub,
  //   newPosition,
  //   help,
  //   looking,
  //   newBio
  // );
  if (newAvatar instanceof File) {
    if (newAvatar.size === 0) {
      newAvatar = user.imageUrl;
    }
    //upload to clerk then set new url for db
  }
  if (newAvatar instanceof String && !newAvatar) {
    newAvatar = user.imageUrl;
  }
  if (!newEmail && !user.primaryEmailAddress?.emailAddress) {
    console.log("no email from clerk");
    return false;
  }
  if (!newEmail && user.primaryEmailAddress !== null) {
    newEmail = user.primaryEmailAddress.emailAddress;
  }
  if (!newUsername && !user.fullName) {
    console.log("no username from clerk");
    return false;
  }
  if (!newUsername && user.fullName) {
    newUsername = user.fullName;
  }
  if (!newUsername || !newEmail || !newGithub || !newPosition || !newBio) {
    console.log("missing data");
    return false;
  }
  const newUser = {
    userId: user.id,
    bio: newBio,
    github: newGithub,
    position: newPosition,
    email: newEmail,
    avatarUrl: newAvatar.toString(),
    displayName: newUsername,
    lookingForHelp: Boolean(help),
    lookingForProjects: Boolean(looking),
  };
  const dbUser = await prismaClient.user.create({ data: newUser });
  if (!dbUser) {
    console.log("no db user");
    return false;
  }
  return true;
};

export const getAdminProjects = async (userId: string) => {
  const projects = await prismaClient.project.findMany({
    where: { adminId: userId },
  });
  return projects;
};
