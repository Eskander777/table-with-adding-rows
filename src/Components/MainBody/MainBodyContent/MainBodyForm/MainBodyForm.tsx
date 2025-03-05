import { useLayoutEffect } from "react";
import RowButtons from "../../../UI/RowButtons/RowButtons";
import styles from "./MainBodyForm.module.sass";
import { RowClass } from "../../../../api/dataClasses";
import { useRef } from "react";

export default function MainBodyForm({
  onChangeRows,
  selectedRowData,
}: {
  onChangeRows: (r: RowClass) => void;
  selectedRowData?: RowClass;
}) {
  const rowNameRef = useRef<HTMLInputElement>(null);
  const salaryRef = useRef<HTMLInputElement>(null);
  const equipmentCostsRef = useRef<HTMLInputElement>(null);
  const overheadsRef = useRef<HTMLInputElement>(null);
  const estimatedProfitRef = useRef<HTMLInputElement>(null);

  useLayoutEffect(() => {
    if (rowNameRef && rowNameRef.current) {
      rowNameRef.current.focus();
    }
  }, []);

  const configureDataForRow = (e: React.KeyboardEvent) => {
    if (e.key !== "Enter") return;

    const rowName = rowNameRef.current?.value || "";
    const salary = salaryRef.current?.value || 0;
    const equipmentCosts = equipmentCostsRef.current?.value || 0;
    const overheads = overheadsRef.current?.value || 0;
    const estimatedProfit = estimatedProfitRef.current?.value || 0;

    if (!rowName) return;

    const newRow = new RowClass(
      rowName,
      Number(salary),
      Number(equipmentCosts),
      Number(overheads),
      Number(estimatedProfit)
    );

    onChangeRows(newRow);
  };

  return (
    <form className={styles["main-body-form"]} onKeyDown={configureDataForRow}>
      <div className={styles["main-body-form__actions"]}>
        <RowButtons isDisabled={true} />
      </div>
      <div className={styles["main-body-form__title"]}>
        <input
          ref={rowNameRef}
          className={styles["main-body-form__input"]}
          name="rowName"
          id="rowName"
          type="text"
          defaultValue={selectedRowData?.rowName}
        />
      </div>
      <div className={styles["main-body-form__total"]}>
        <input
          ref={salaryRef}
          className={styles["main-body-form__input"]}
          name="salary"
          id="salary"
          type="text"
          defaultValue={selectedRowData?.salary || 0}
        />
      </div>
      <div className={styles["main-body-form__total"]}>
        <input
          ref={equipmentCostsRef}
          className={styles["main-body-form__input"]}
          name="equipmentCosts"
          id="equipmentCosts"
          type="text"
          defaultValue={selectedRowData?.equipmentCosts || 0}
        />
      </div>
      <div className={styles["main-body-form__total"]}>
        <input
          ref={overheadsRef}
          className={styles["main-body-form__input"]}
          name="overheads"
          id="overheads"
          type="text"
          defaultValue={selectedRowData?.overheads || 0}
        />
      </div>
      <div className={styles["main-body-form__total"]}>
        <input
          ref={estimatedProfitRef}
          className={styles["main-body-form__input"]}
          name="estimatedProfit"
          id="estimatedProfit"
          type="text"
          defaultValue={selectedRowData?.estimatedProfit || 0}
        />
      </div>
    </form>
  );
}

