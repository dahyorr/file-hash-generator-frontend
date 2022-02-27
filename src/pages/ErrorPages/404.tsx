import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

const PageNotFound = () => {
  return (
  <main style={{ padding: "1rem" }}>
    <Stack alignItems="center" justifyContent="center" height="100%">
      <Typography variant="h1" fontSize={"6rem"} >404</Typography>
      <Typography variant="h6">Theres nothing here !</Typography>
    </Stack>
  </main>
  );
};

export default PageNotFound;