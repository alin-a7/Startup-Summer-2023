import { FC, ReactNode } from "react";
import Head from "next/head";

import Header from "../Header";


import styles from "./Layout.module.scss";

type LayotProps = {
  children: ReactNode;
};

const Layout: FC<LayotProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Job Search App</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <main className={styles.layout}>
        <Header />
        <div className={styles.childrenBlock}>{children}</div>
      </main>
    </>
  );
};

export default Layout;
