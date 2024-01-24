import { GridColDef } from "@mui/x-data-grid";
import { useFavorites } from "../../hooks/useFavorites";
import { useMemo } from "react";
import DataTable from "../../components/table";

function FavoritesPage() {
  const { favorites } = useFavorites();

  const columns: GridColDef[] = [
    {
      field: "resource",
      headerName: "Type",
      flex: 1,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
    },
  ];

  const rows = useMemo(() => {
    return favorites
      ? Object.values(favorites).map(({ id, name, resource }) => ({
          id: `${resource}${id}`,
          realId: id,
          name,
          resource,
        }))
      : [];
  }, [favorites]);

  return (
    <>
      <DataTable
        rows={rows}
        columns={columns}
        resource={"favorites"}
        title="Favorites"
      />
    </>
  );
}

export default FavoritesPage;
