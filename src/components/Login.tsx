import { Button, TextField, Grid, Paper, Typography } from "@mui/material";

export default function Login() {
  const handleLogin = () => {
    sessionStorage.setItem("isLoggedIn", "true");
  };
  return (
    <Paper>
      <Typography
        component="h4"
        variant="h4"
        sx={{
          marginBottom: "15px",
        }}
      >
        Spy CRM Login
      </Typography>
      <Grid container rowSpacing={1}>
        <Grid item xs={12}>
          <TextField label="SPY ID"></TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField label="Password" type={"password"}></TextField>
        </Grid>
        <Grid item xs={12}>
          <Button fullWidth onClick={handleLogin}>
            {" "}
            Login{" "}
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}
