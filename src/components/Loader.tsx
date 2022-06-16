import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function CircularIndeterminate() {
  return (
    <Box sx={{ display: "grid", placeItems: "center", height: "90vh" }}>
      <CircularProgress size={50} />
    </Box>
  );
}
