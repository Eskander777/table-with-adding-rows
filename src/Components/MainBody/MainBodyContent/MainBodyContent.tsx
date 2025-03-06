import styles from './MainBodyContent.module.sass';
import { RowClass } from '../../../api/dataClasses';
import MainBodyHeaderRow from './MainBodyHeaderRow/MainBodyHeader.Row';
import MainBodyRow from './MainBodyRow/MainBodyRow';
import MainBodyForm from './MainBodyForm/MainBodyForm';
import { useHttp } from '../../../hooks/useHttp';
import { addRow, updateRow, deleteRow } from '../../../api/methods';

export default function MainBodyContent() {
  const {
    rows,
    setRows,
    isAdding,
    setIsAdding,
    changedRowIndex,
    setChangedRowIndex,
  } = useHttp();

  const deleteRowHandler = async (index: number) => {
    const rowToDelete = rows[index];

    const isDeleted = await deleteRow(rowToDelete);

    if (isDeleted && isDeleted.success) {
      setRows((curState: RowClass[]) =>
        curState.filter((_, rowIndex) => rowIndex !== index)
      );
    }
  };

  const addRowHandler = async (newRow: RowClass) => {
    const isAdded = await addRow(newRow);

    if (isAdded && isAdded.success) {
      setRows((currentRows: RowClass[]) => {
        const updatedRows = [...currentRows];
        newRow.id = isAdded.createdId;
        updatedRows.push(newRow);

        return updatedRows;
      });
      setIsAdding(false);
    }
  };

  const selectRowToEdit = (rowIndex: number) => {
    if (isAdding) return;
    setChangedRowIndex(rowIndex);
  };

  const updateRows = async (rowToUpdate: RowClass) => {
    const isUpdated = await updateRow(rowToUpdate);

    if (isUpdated && isUpdated.success) {
      setRows((currentRows) => {
        const updatedRows = [...currentRows];

        if (changedRowIndex || changedRowIndex === 0) {
          updatedRows[changedRowIndex] = rowToUpdate;
          setChangedRowIndex(undefined);
        }

        return updatedRows;
      });
    }
  };

  return (
    <div className={styles['content-list']}>
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
                onAdd={() => {
                  if (changedRowIndex || changedRowIndex === 0) return;
                  setIsAdding(true);
                }}
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

