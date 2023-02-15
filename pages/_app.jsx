import PageLayout from "../components/layout/_pageLayout";
import { AppContextProvider } from "./../context/AppContext";

// allows for Vercel tracking
import { Analytics } from "@vercel/analytics/react";

// golbal styles
import "../styles/globals.scss";

export default function App({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <PageLayout>
        <Component {...pageProps} />
        <Analytics />
      </PageLayout>
    </AppContextProvider>
  );
}
