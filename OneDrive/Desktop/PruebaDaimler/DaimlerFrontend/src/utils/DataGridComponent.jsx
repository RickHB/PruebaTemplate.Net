import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";
import { DataGrid } from "@mui/x-data-grid";
import { useMemo } from "react";
import ExcelDownload from "../Shared/ExcelDownload";
import AddModal from "../Modals/AddModal";

const DataGridComponent = ({ data, pageSize, rowsPerPageOptions, actions = [] }) => {
  const columns = useMemo(() => {
    if (data.length > 0) {
      const keys = Object.keys(data[0]);
      const cols = keys.map((key) => ({
        field: key,
        headerName: key,
        width: 150,
        renderCell: (params) => (
          <div style={{ whiteSpace: "normal", wordWrap: "break-word", lineHeight: "1.2" }}>
            {params.value}
          </div>
        ),
      }));
  
      if (actions) {
        actions.forEach((action) => {
          const actionLabel = action.label.toLowerCase();
          if (actionLabel === "editar" || actionLabel === "eliminar") {
            cols.push({
              field: `action_${action.label}`,
              headerName: action.label,
              width: 150,
              renderCell: (params) => (
                <button
                  onClick={() => action.onClick(params.row)}
                  className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-transparent px-3 font-medium text-neutral-600 transition-all duration-100 [box-shadow:5px_5px_rgb(82_82_82)] active:translate-x-[3px] active:translate-y-[3px] active:[box-shadow:0px_0px_rgb(82_82_82)]"
                  style={{
                    background: actionLabel === "eliminar" ? "red" : "#1414b8",
                    color: "white",
                  }}
                >
                  <FontAwesomeIcon
                    icon={actionLabel === "eliminar" ? faTrash : faEdit}
                    className="mr-1"
                  />
                  {action.label}
                </button>
              ),
            });
          }
        });
      }
  
      return cols;
    }
    return [];
  }, [data, actions]);
  const hasAddAction = useMemo(() => {
    return actions.some((action) => action.label.toLowerCase() === "agregar");
  }, [actions]);

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="flex items-center justify-between">
        <ExcelDownload info={data} />
        {hasAddAction && (
          <AddModal info = {columns}/>
        )}
      </div>
      <DataGrid
        className="mx-4"
        rows={data}
        columns={columns}
        pageSize={pageSize}
        rowsPerPageOptions={rowsPerPageOptions}
      />
    </div>
  );
};

export default DataGridComponent;