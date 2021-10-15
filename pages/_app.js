import App from "next/app";
import 'tailwindcss/tailwind.css'
import Head from "next/head";
import { createContext } from "react";
import { getStrapiMedia } from "../lib/media";
import { fetchAPI } from "../lib/api";
import "../components/slider/css/slider.css";

export const GlobalContext = createContext({});

const MyApp = ({ Component, pageProps }) => {

    const { global } = pageProps;

  return(
      <>
          <Head>
              <link rel="shortcut icon" href={getStrapiMedia(global.favicon)}/>
          </Head>


      <GlobalContext.Provider value={global}>
          <Component {...pageProps}/>
      </GlobalContext.Provider>
      </>
  );
};

MyApp.getInitialProps = async (ctx) => {
    const appProps = await App.getInitialProps(ctx);
    // Fetch global site settings from Strapi
    const global = await fetchAPI("/global");
    // Pass the data to our page via props
    return { ...appProps, pageProps: { global } };
};

export default MyApp
