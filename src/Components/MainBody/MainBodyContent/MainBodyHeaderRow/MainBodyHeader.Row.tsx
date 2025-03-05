import styles from "./MainBodyHeaderRow.module.sass";

export default function MainBodyHeaderRow() {
  return (
    <ul className={styles["main-body-header-row"]}>
      <li className={styles["main-body-header-row__level"]}>
        <p>Уровень</p>
      </li>
      <li className={styles["main-body-header-row__name"]}>
        <p>Наименование работ</p>
      </li>
      <li className={styles["main-body-header-row__total"]}>
        <p>Основная з/п</p>
      </li>
      <li className={styles["main-body-header-row__total"]}>
        <p>Оборудование</p>
      </li>
      <li className={styles["main-body-header-row__total"]}>
        <p>Накладные расходы</p>
      </li>
      <li className={styles["main-body-header-row__total"]}>
        <p>Сметная прибыль</p>
      </li>
    </ul>
  );
}

