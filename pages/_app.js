import { ApolloProvider } from "@apollo/client";
import { client } from "../config/apolloClient";
import "../styles/scss/index.scss";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <div className="w-50 mx-auto py-5">
        <Component {...pageProps} />
      </div>
    </ApolloProvider>
  );
}

export default MyApp;
