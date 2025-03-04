import MainBodyHeader from "./MainBodyHeader/MainBodyHeader";
import styles from "./MainBody.module.sass";

export default function MainBody() {
  return (
    <div className={styles["main-body"]}>
      <MainBodyHeader />
    </div>
  );
}

