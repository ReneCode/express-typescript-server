// define the graphql schema

const { buildSchema } = require("graphql");

const schema = buildSchema(`
  type Query {
    dummy: String
  }
`);

export default schema;
