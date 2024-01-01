import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useContext } from "react";

import { ProjectContext } from "@/projectContext";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const projectData = useContext(ProjectContext);

  return (
    <AnimatePresence mode="wait">
      <motion.div key={router.pathname}>
        <ProjectContext.Provider value={projectData}>
          <ThemeProvider attribute="class">
            <Component {...pageProps} />
          </ThemeProvider>
        </ProjectContext.Provider>

        <motion.div
          className="absolute z-50 top-0 left-0 w-full h-screen bg-black dark:bg-white origin-bottom	"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        ></motion.div>
        <motion.div
          className="absolute z-50 top-0 left-0 w-full h-screen bg-black dark:bg-white origin-top"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        ></motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
