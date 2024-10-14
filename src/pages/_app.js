import Layout from "@/app/components/Layout";
import "@/styles/fonts.css";
import "@/styles/globals.css";
import "@/styles/animation.scss";
import "@/styles/game.scss";
import "@/styles/home.scss";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
