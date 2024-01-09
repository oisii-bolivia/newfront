import { lucia } from "lucia";
import { nextjs_future } from "lucia/middleware";
import { prisma } from "@lucia-auth/adapter-prisma";
import { prismaClient } from "../prisma";
import "lucia/polyfill/node";

export const auth = lucia({
  env: "DEV",
  middleware: nextjs_future(),
  sessionCookie: {
    expires: false,
  },
  adapter: prisma(prismaClient),

  getUserAttributes: (data) => {
    return {
      username: data.username,
      email: data.email,
    };
  },
});

export type Auth = typeof auth;
