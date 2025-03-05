import RowButtons from "../../../UI/RowButtons/RowButtons";
import { RowClass } from "../../../../api/dataClasses";
import styles from "./MainBodyRow.module.sass";

export default function MainBodyRow({
  item,
  onAdd,
  index,
  onDelete,
  selectRowToEdit,
}: {
  item: RowClass;
  onAdd: () => void;
  index: number;
  onDelete: (i: number) => void;
  selectRowToEdit: (i: number) => void;
}) {
  return (
    <ul
      className={styles["main-body-row"]}
      onDoubleClick={() => selectRowToEdit(index)}
    >
      <li className={styles["main-body-row__icon"]}>
        <RowButtons
          isDisabled={false}
          onAdd={onAdd}
          rowIndex={index}
          onDelete={onDelete}
        />
      </li>
      <li className={styles["main-body-row__title"]}>
        <p>{item.rowName}</p>
      </li>
      <li className={styles["main-body-row__totals"]}>
        <p>{item.salary}</p>
      </li>
      <li className={styles["main-body-row__totals"]}>
        <p>{item.equipmentCosts}</p>
      </li>
      <li className={styles["main-body-row__totals"]}>
        <p>{item.overheads}</p>
      </li>
      <li className={styles["main-body-row__totals"]}>
        <p>{item.estimatedProfit}</p>
      </li>
    </ul>
  );
}

