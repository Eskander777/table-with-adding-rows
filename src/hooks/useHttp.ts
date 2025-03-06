import { useState, useEffect } from 'react';

import { RowClass } from '../api/dataClasses';
import { getRows } from '../api/methods';

export function useHttp() {
  const [rows, setRows] = useState<RowClass[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const [changedRowIndex, setChangedRowIndex] = useState<number | undefined>(
    undefined
  );

  useEffect(() => {
    getRows().then((rows) => {
      if (!rows) {
        return setRows([]);
      }
      setRows(rows);
    });
  }, []);

  useEffect(() => {
    if (rows.length === 0) {
      setIsAdding(true);
    } else {
      setIsAdding(false);
    }
  }, [rows]);

  return {
    rows,
    setRows,
    isAdding,
    setIsAdding,
    changedRowIndex,
    setChangedRowIndex,
  };
}

