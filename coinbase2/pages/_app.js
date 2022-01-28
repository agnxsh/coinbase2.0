import "../styles/globals.css";
import { ThirdwebWeb3Provider } from "@3rdweb/hooks";

function MyApp({ Component, pageProps }) {
  const supportedChainIds = [80001, 4];
  const connectors = {
    injected: {},
  };
  return (
    <ThirdwebWeb3Provider
      supportedChainIds={supportedChainIds}
      connectors={connectors}
    >
      <Component {...pageProps} />
      {/* in this way all of the pages are wrapped in this web3 user authentication */}
    </ThirdwebWeb3Provider>
  );
}

export default MyApp;
