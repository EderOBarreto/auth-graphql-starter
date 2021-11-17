const { GraphQLObjectType, GraphQLString } = require("graphql");
const UserType = require("./types/user_type");
const { signup, login } = require("../services/auth");
const {
  moduleIds,
} = require("babel-core/lib/transformation/file/options/config");

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    signup: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve(parentValue, { email, password }, req) {
        return signup({ email, password, req });
      },
    },
    logout: {
      type: UserType,
      resolve(parentValue, args, req) {
        const { user } = req;
        req.logout();
        return user;
      },
    },
    login: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve(parentValue, { email, password }, req) {
        return login({ email, password, req });
      },
    },
  },
});

module.exports = mutation;
