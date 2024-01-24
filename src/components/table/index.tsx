import { Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import { Data } from "../../types";

interface TableProps {
  rows: Data[];
  columns: GridColDef[];
  resource: string;
  title: string;
}

function DataTable({ rows, columns, resource, title }: TableProps) {
  const navigate = useNavigate();

  return (
    <div style={{ margin: "1%" }}>
      <Typography variant="h5" pb={3}>
        {title}
      </Typography>
      <DataGrid
        sx={{
          // disable cell selection style
          ".MuiDataGrid-cell:focus": {
            outline: "none",
          },
          backgroundColor: "white",
          // pointer cursor on ALL rows
          "& .MuiDataGrid-row:hover": {
            cursor: "pointer",
          },
        }}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10]}
        disableRowSelectionOnClick
        onRowClick={(row) =>
          navigate(
            resource === "favorites"
              ? `/${row.row.resource}/${row.row.realId}`
              : `/${resource}/${row.id}`
          )
        }
      />
    </div>
  );
}

export default DataTable;
