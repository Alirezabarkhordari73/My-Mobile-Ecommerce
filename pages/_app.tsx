import "../styles/globals.css";
import type { AppProps } from "next/app";
import { store } from "../Redux/store";
import { Provider } from "react-redux";
import { CartProvider } from "../context/CartContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </Provider>
  );
}

export default MyApp;
