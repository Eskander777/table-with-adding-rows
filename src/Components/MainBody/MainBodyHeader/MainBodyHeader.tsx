import styles from "./MainBodyHeader.module.sass";

export default function MainBodyHeader() {
  return (
    <header className={styles["main-body-header"]}>
      <ul>
        <li className={styles["main-body-header__item"]}>
          <p>Строительно&#8209;монтажные&nbsp;работы</p>
        </li>
      </ul>
    </header>
  );
}

