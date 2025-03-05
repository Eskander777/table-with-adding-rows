import { useState, useEffect } from "react";

import styles from "./MainBodyContent.module.sass";
import { RowClass } from "../../../api/dataClasses";
import MainBodyHeaderRow from "./MainBodyHeaderRow/MainBodyHeader.Row";
import MainBodyRow from "./MainBodyRow/MainBodyRow";
import MainBodyForm from "./MainBodyForm/MainBodyForm";

export default function MainBodyContent() {
  const [rows, setRows] = useState<RowClass[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const [changedRowIndex, setChangedRowIndex] = useState<number | undefined>(
    undefined
  );

  useEffect(() => {
    setRows([]);
  }, []);

  useEffect(() => {
    if (rows.length === 0) {
      setIsAdding(true);
    }
  }, [rows]);

  const deleteRowHandler = (index: number) => {
    setRows((curState) => curState.filter((_, rowIndex) => rowIndex !== index));
  };

  const addRowHandler = (newRow: RowClass) => {
    setRows((currentRows) => {
      const updatedRows = [...currentRows];
      updatedRows.push(newRow);

      return updatedRows;
    });
    setIsAdding(false);
  };

  const selectRowToEdit = (rowIndex: number) => {
    setChangedRowIndex(rowIndex);
  };

  const updateRows = (rowToUpdate: RowClass) => {
    setRows((currentRows) => {
      const updatedRows = [...currentRows];

      if (changedRowIndex) {
        updatedRows[changedRowIndex] = rowToUpdate;
        setChangedRowIndex(undefined);
      }

      return updatedRows;
    });
  };

  return (
    <div className={styles["content-list"]}>
      <MainBodyHeaderRow />
      {rows.length > 0 && (
        <>
          {rows.map((item, index) => {
            if (index === changedRowIndex) {
              return (
                <MainBodyForm
                  key={item.id}
                  onChangeRows={updateRows}
                  selectedRowData={item}
                />
              );
            }

            return (
              <MainBodyRow
                key={item.id}
                item={item}
                index={index}
                onAdd={() => setIsAdding(true)}
                onDelete={deleteRowHandler}
                selectRowToEdit={selectRowToEdit}
              />
            );
          })}
        </>
      )}
      {isAdding && <MainBodyForm onChangeRows={addRowHandler} />}
    </div>
  );
}

