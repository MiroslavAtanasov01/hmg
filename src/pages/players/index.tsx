import { useEffect, useState } from "react";
import dataProvider from "../../services/dataProvider";
import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { Player } from "./types";
import DataTable from "../../components/table";

function PlayersPage() {
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    dataProvider<{ data: Player[] }>("players")
      .then((data) => {
        setPlayers(data?.data);
      })
      .catch((error: Error) => {
        console.error(error);
      });
  }, []);

  const columns: GridColDef[] = [
    { field: "first_name", headerName: "First Name", flex: 1, width: 130 },
    { field: "last_name", headerName: "Last Name", flex: 1, width: 130 },
    { field: "position", headerName: "Position", flex: 1, width: 130 },
    {
      field: "team",
      headerName: "Team",
      flex: 1,
      width: 200,
      valueGetter: (params: GridValueGetterParams) =>
        params.row.team?.full_name || "N/A",
    },
    { field: "weight_pounds", headerName: "Weight (lbs)", flex: 1, width: 130 },
  ];

  return (
    <>
      <DataTable
        rows={players}
        columns={columns}
        resource={"players"}
        title="Players"
      />
    </>
  );
}

export default PlayersPage;
