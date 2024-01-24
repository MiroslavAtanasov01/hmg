import Stack from "@mui/material/Stack";

import { Text, TText } from "../text";

type TFeatureRow = TText & {
  title?: string;
};

export const FeatureRow: React.FC<TFeatureRow> = ({ title, ...rest }) => (
  <Stack spacing={1}>
    <Text type="title">{title}</Text>
    <Text {...rest} />
  </Stack>
);
