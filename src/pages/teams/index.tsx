import { useEffect, useState } from "react";
import dataProvider from "../../services/dataProvider";
import { GridColDef } from "@mui/x-data-grid";
import { Team } from "./types";
import DataTable from "../../components/table";

function TeamsPage() {
  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    dataProvider<{ data: Team[] }>("teams")
      .then((data) => {
        setTeams(data?.data);
      })
      .catch((error: Error) => {
        console.error(error);
      });
  }, []);

  const columns: GridColDef[] = [
    { field: "full_name", headerName: "Name", flex: 1, width: 130 },
    { field: "city", headerName: "City", flex: 1, width: 130 },
    { field: "conference", headerName: "Conference", flex: 1, width: 130 },
    { field: "abbreviation", headerName: "Abbreviation", flex: 1, width: 130 },
    { field: "division", headerName: "Division", flex: 1, width: 130 },
  ];

  return (
    <>
      <DataTable
        rows={teams}
        columns={columns}
        resource={"teams"}
        title="Teams"
      />
    </>
  );
}

export default TeamsPage;
