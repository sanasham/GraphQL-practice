import _db from "../db/_db.js";

const resolvers = {
  Query: {
    games: () => {
      return _db.games;
    },
  },
};

export default resolvers;
