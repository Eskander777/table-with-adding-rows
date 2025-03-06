import { RowClass } from './dataClasses';
import { EID } from './data';

export async function getRows() {
  try {
    const resp = await fetch(
      `${EID.host}/v1/outlay-rows/entity/${EID.id}/row/list`
    );

    if (!resp.ok) {
      throw new Error('Fetching is failed!');
    }

    const dataJson: RowClass[] = await resp.json();

    return dataJson;
  } catch (error) {
    alert(error);
  }
}

export async function addRow(newRow: RowClass) {
  try {
    const resp = await fetch(
      `${EID.host}/v1/outlay-rows/entity/${EID.id}/row/create`,
      {
        method: 'POST',
        body: JSON.stringify(newRow),
        headers: { 'Content-Type': 'application/json' },
      }
    );

    if (!resp.ok) {
      throw new Error('Adding row is failed!');
    }

    const dataJson: { current: RowClass } = await resp.json();

    const newId = dataJson.current.id;

    return { success: true, createdId: newId };
  } catch (error) {
    alert(error);
  }
}

export async function updateRow(rowToUpdate: RowClass) {
  try {
    const resp = await fetch(
      `${EID.host}/v1/outlay-rows/entity/${EID.id}/row/${rowToUpdate.id}/update`,
      {
        method: 'POST',
        body: JSON.stringify(rowToUpdate),
        headers: { 'Content-Type': 'application/json' },
      }
    );

    if (!resp.ok) {
      throw new Error('Adding row is failed!');
    }

    return { success: true };
  } catch (error) {
    alert(error);
  }
}
export async function deleteRow(rowToDelete: RowClass) {
  try {
    const resp = await fetch(
      `${EID.host}/v1/outlay-rows/entity/${EID.id}/row/${rowToDelete.id}/delete`,
      {
        method: 'DELETE',
      }
    );

    if (!resp.ok) {
      throw new Error('Adding row is failed!');
    }

    return { success: true };
  } catch (error) {
    alert(error);
  }
}

