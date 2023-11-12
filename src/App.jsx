import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import Form from "./Components/Form";
import GetUsers from "./Components/GetUsers";

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      console.log(`GraphQL error ${message}`);
    });
  }
});
const link = from([
  errorLink,
  new HttpLink({ uri: "http://localhost:3500/graphql" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="container">
        <Form />
        <GetUsers />
      </div>
    </ApolloProvider>
  );
}

export default App;
