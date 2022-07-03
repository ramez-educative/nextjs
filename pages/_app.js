import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import React from 'react';
import { ThemeProvider } from "next-themes";
import Layout from "../components/Layout";

const MyApp = ({ Component, pageProps }) => {
  return (
      <ThemeProvider attribute="class">
        <Layout>
            <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
  );
}

export default MyApp;