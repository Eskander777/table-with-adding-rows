import styles from "./AsideHeader.module.sass";
import ChevronDown from "../../../assets/chevron-down.svg";

export default function AsideHeader() {
  return (
    <header className={styles["aside-header"]}>
      <div className={styles["aside-header__names"]}>
        <p
          className={[
            styles["aside-header__title"],
            styles["aside-header__title--main"],
          ].join(" ")}
        >
          Название проекта
        </p>
        <p className={styles["aside-header__title"]}>Аббревиатурв</p>
      </div>
      <div className={styles["aside-header__icon"]}>
        <img src={ChevronDown} alt="Chevron" />
      </div>
    </header>
  );
}

