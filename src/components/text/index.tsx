import { ReactNode } from "react";
import Typography from "@mui/material/Typography";

export type TText = {
  type?: "title" | "text" | "list";
  value?: string | number | null;
  children?: ReactNode;
};

export const Text: React.FC<TText> = ({ type = "text", value, children }) => {
  switch (type) {
    case "title":
      return (
        <Typography variant="body1" fontWeight="bold" color="primary">
          {children || value}
        </Typography>
      );
    default:
      return <Typography>{value ?? ""}</Typography>;
  }
};
