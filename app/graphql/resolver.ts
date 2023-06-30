import { db } from "@/lib/prisma";

export const resolvers = {
  Query: {
    user(_: any, args: any, __: any) {
      const aUser = db.user.findUniqueOrThrow({
        where: {
          id: args.id,
        },
      });
      return aUser;
    },
    users() {
      return db.user.findMany({});
    }
  },
  Mutation: {
    user(_: any, args: any, __: any) {
      const aUser = db.user.create({
        data: args.user
      });
      return aUser;
    },
  }
};
