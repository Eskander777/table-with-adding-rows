import PageIcon from "../../../assets/page.svg";
import BucketIcon from "../../../assets/TrashFill.svg";
import styles from "./RowButtons.module.sass";

export default function RowButtons({
  onAdd,
  onDelete,
  isDisabled,
  rowIndex,
}: {
  isDisabled: boolean;
  onAdd?: () => void;
  onDelete?: (index: number) => void;
  rowIndex?: number;
}) {
  const classes = [styles["row-buttons"]];

  if (isDisabled) {
    classes.push(styles["row-buttons--disabled"]);
  }

  return (
    <div className={classes.join(" ")}>
      <button disabled={isDisabled} onClick={onAdd}>
        <img src={PageIcon} alt="Page" />
      </button>
      {onDelete && (
        <button
          onClick={() => {
            if (rowIndex !== undefined) {
              onDelete(rowIndex);
            }
          }}
        >
          <img src={BucketIcon} alt="Bucket" />
        </button>
      )}
    </div>
  );
}

