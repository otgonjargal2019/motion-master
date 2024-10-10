import localFont from "next/font/local";
import Layout from "@/app/components/Layout";
import "@/styles/globals.css";
import "@/styles/animation.css";
import "@/styles/home.css";

const gmarketSansBold = localFont({
  src: "./fonts/GmarketSansTTFBold.ttf",
  variable: "--font-gmarket-sans-bold",
  weight: "700",
});

const gmarketSansMedium = localFont({
  src: "./fonts/GmarketSansTTFMedium.ttf",
  variable: "--font-gmarket-sans-medium",
  weight: "500",
});

const gmarketSansLight = localFont({
  src: "./fonts/GmarketSansTTFLight.ttf",
  variable: "--font-gmarket-sans-light",
  weight: "300",
});

export default function App({ Component, pageProps }) {
  return (
    <Layout
      className={`${gmarketSansBold.variable} ${gmarketSansMedium.variable} ${gmarketSansLight.variable} `}
    >
      <Component {...pageProps} />
    </Layout>
  );
}
