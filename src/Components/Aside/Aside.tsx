import styles from "./Aside.module.sass";
import AsideHeader from "./AsideHeader/AsideHeader";
import AsideList from "./AsideList/AsideList";

export default function Aside() {
  return (
    <aside className={styles.aside}>
      <AsideHeader />
      <AsideList />
    </aside>
  );
}

