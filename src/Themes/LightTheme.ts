import { createTheme } from "@mui/material";
export const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
  typography: {
    fontFamily: ["poppin"].join(","),
    logo: {
      fontSize: 26,
      fontWeight: 900,
      color: "#9932cc",
    },
  },
});
