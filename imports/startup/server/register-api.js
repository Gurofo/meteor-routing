import { createApolloServer } from "meteor/apollo";
import { makeExecutableSchema } from "graphql-tools";
import merge from "lodash/merge";

import UserSchema from "../../api/user/User.graphql";
import UserResolvers from "../../api/user/resolvers";

//aaaaaaaaaaaaaaaaaa

const typeDefs = [UserSchema];

const resolvers = merge(UserResolvers);

const schema = makeExecutableSchema({ typeDefs, resolvers });

// const typeDefs = `
// type Query {
//   hi: String
// }`;

// const resolvers = {
//   Query: {
//     hi() {

//     }
//   }
// }
createApolloServer({ schema });
