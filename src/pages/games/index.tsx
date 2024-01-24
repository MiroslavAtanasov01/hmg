import { useEffect, useState } from "react";
import dataProvider from "../../services/dataProvider";
import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { Game } from "./types";
import DataTable from "../../components/table";
import { formatDateString } from "../../utils/formatDate";

function GamesPage() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    dataProvider<{ data: Game[] }>("games")
      .then((data) => {
        setGames(data?.data);
      })
      .catch((error: Error) => {
        console.error(error);
      });
  }, []);

  const columns: GridColDef[] = [
    { field: "status", headerName: "Status", flex: 1, width: 130 },
    { field: "season", headerName: "Season", flex: 1, width: 130 },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
      width: 130,
      valueGetter: (params: GridValueGetterParams) =>
        formatDateString(params.row.date),
    },
    {
      field: "home_team",
      headerName: "Home Team",
      flex: 1,
      width: 200,
      valueGetter: (params: GridValueGetterParams) =>
        params.row.home_team?.full_name || "N/A",
    },
    {
      field: "home_team_score",
      headerName: "Home team score",
      flex: 1,
      width: 130,
    },

    {
      field: "visitor_team",
      headerName: "Visitor Team",
      flex: 1,
      width: 200,
      valueGetter: (params: GridValueGetterParams) =>
        params.row.visitor_team?.full_name || "N/A",
    },
    {
      field: "visitor_team_score",
      headerName: "Visitor team score",
      flex: 1,
      width: 130,
    },
  ];

  return (
    <>
      <DataTable
        rows={games}
        columns={columns}
        resource={"games"}
        title="Games"
      />
    </>
  );
}

export default GamesPage;
