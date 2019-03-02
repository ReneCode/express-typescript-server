//
// starting an express server
//
import express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const graphqlHTTP = require("express-graphql");

// for graphql
import schema from "./graphql/schema";
import rootValue from "./graphql/rootValue";

console.log("start server ...");

// put your environment-variables in .env file
// but do NOT put that .env file into the git repository
require("dotenv").config();

const app = express();

// use default cors settings *
app.use(cors());

// get the body data for POST express handlers
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// some logging
app.use(morgan("tiny", {}));

app.get("/", (req: any, res: any) => {
  res.send('hi, im an express server. Try <a href="/graphql">graphql</a>');
});

// add graphql to express
const graphql = graphqlHTTP({
  schema: schema,
  rootValue: rootValue,
  graphiql: true
});
app.use("/graphql", graphql);

// start the http server
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("server listing on port:", port);
});
