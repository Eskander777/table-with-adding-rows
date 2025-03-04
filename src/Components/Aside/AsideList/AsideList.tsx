import { ASIDE_ITEMS } from "../../../api/data";
import RectanglesIcon from "../../../assets/rectangles.svg";
import styles from "./AsideList.module.sass";

export default function AsideList() {
  return (
    <ul className={styles["aside-list"]}>
      {ASIDE_ITEMS.map((item) => {
        const itemClassesList = [styles["aside-list__item"]];

        if (item.selected) {
          itemClassesList.push(styles["aside-list__item--selected"]);
        }

        return (
          <li key={item.id} className={itemClassesList.join(" ")}>
            <div className={styles["aside-list__icon"]}>
              <img src={RectanglesIcon} alt="Rectangle" />
            </div>
            <p className={styles["aside-list__title"]}>{item.title}</p>
          </li>
        );
      })}
    </ul>
  );
}

