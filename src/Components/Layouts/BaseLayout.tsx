import { Box, Typography } from "@mui/material";
import { ILayout } from "@src/types";
import { Fragment } from "react";
export const BaseLayout: React.FC<ILayout> = ({ children }) => {
  return (
    <Fragment>
      <Box sx={{ padding: "20px 10px 22px 15px" }}>
        <Typography variant="logo">Gello</Typography>
      </Box>
      <Box sx={{ padding: "20px 24px 22px 24px" }}>{children}</Box>
    </Fragment>
  );
};
