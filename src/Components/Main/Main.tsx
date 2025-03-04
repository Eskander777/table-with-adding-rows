import { PropsWithChildren } from "react";

import styles from "./Main.module.sass";

export default function Main({ children }: PropsWithChildren) {
  return <main className={styles.main}>{children}</main>;
}

