import PageLayout from "../components/layout/_pageLayout";
import { AppContextProvider } from "./../context/AppContext";

// golbal styles
import "../styles/globals.scss";

export default function App({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </AppContextProvider>
  );
}
