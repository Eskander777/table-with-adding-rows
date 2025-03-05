import MainBodyHeader from "./MainBodyHeader/MainBodyHeader";
import MainBodyContent from "./MainBodyContent/MainBodyContent";
import styles from "./MainBody.module.sass";

export default function MainBody() {
  return (
    <div className={styles["main-body"]}>
      <MainBodyHeader />
      <MainBodyContent />
    </div>
  );
}

