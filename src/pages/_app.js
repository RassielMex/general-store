import Layout from "@/components/Layout";
import CartContext from "@/store/CartContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <CartContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartContext>
  );
}
