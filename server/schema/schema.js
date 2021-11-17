const { GraphQLSchema } = require("graphql");
const mutation = require("./mutations");

const RootQueryType = require("./types/root_query_type");

module.exports = new GraphQLSchema({
  query: RootQueryType,
  mutation,
});
