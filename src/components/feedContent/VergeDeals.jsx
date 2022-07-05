import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button"

//==============================================================================

export default function VergeDeals() {
  return (
    <Box
      sx={{
        marginTop: "3rem",
        border: "0.15rem solid #393092",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "1rem",
        fontSize: "0.9rem",
      }}
    >
      <img
        src={
          "https://ik.imagekit.io/htg3gsxgz/The_Verge/verge-deals-icon_KhXG7QDSp.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656872188961"
        }
        alt={"Verge deal icon"}
        style={{ width: "4rem", position: "absolute", top: "-2.1rem" }}
      />
      <img
        src={
          "https://ik.imagekit.io/htg3gsxgz/The_Verge/verge-deals.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656872330430"
        }
        alt={"Verge deals"}
        style={{ objectFit: "cover", width: "40%", marginTop: "2.5rem" }}
      />
      <Typography variant="p" textAlign={"center"} sx={{ marginTop: "2rem" }}>
        Subscribe to get the best Verge-approved tech deals of the week.
      </Typography>
      <Typography variant="p" alignSelf={"flex-start"} marginTop={"2rem"}>
        Email (Required)
      </Typography>
      <TextField fullWidth sx={{ marginTop: "0.2rem" }}></TextField>
      <Typography variant="p" sx={{ marginTop: "1rem" }}>
        By signing up, you agree to our{" "}
        <span style={{ color: "#e2127A", cursor: "pointer" }}>
          Privacy Notice
        </span>{" "}
        and European users agree to the data transfer policy.
      </Typography>
      <Button
        variant="contained"
        disableElevation
        disableRipple
        fullWidth
        size="large"
        sx={{
          marginTop: "1.5rem",
          borderRadius: "0",
          backgroundColor: "#e2127A",
          transition: "0.125s",
          "&:hover": {
            backgroundColor: "#b30e61",
          },
        }}
      >
        SUBSCRIBE
      </Button>
    </Box>
  );
}
