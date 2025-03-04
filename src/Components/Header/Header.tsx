import SquaresIcon from "../../assets/squares.svg";
import MoveArrow from "../../assets/move-arrow.svg";
import styles from "./Header.module.sass";

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles["icon-block"]}>
          <img
            className={styles["icon-block__icon"]}
            src={SquaresIcon}
            alt="Squares"
          />
          <img
            className={styles["icon-block__icon"]}
            src={MoveArrow}
            alt="Move Arrow"
          />
        </div>
        <div className={styles["tabs-block"]}>
          <div
            className={[
              styles["tabs-block__tab"],
              styles["tabs-block__tab--selected"],
            ].join(" ")}
          >
            Просмотр
          </div>
          <div className={styles["tabs-block__tab"]}>Управление</div>
        </div>
      </header>
    </>
  );
}

