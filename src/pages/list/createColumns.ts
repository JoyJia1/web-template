import type { DataTableColumns } from "naive-ui";

export default function createColumns(
  callback: (actionType: Exclude<ActionType, 0>, row: ListData) => void
): DataTableColumns<ListData> {
  return [
    // ...
  ]
}
