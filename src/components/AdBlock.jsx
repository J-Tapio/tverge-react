import Box from "@mui/material/Box";

export default function AdBlock() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        marginTop: "0.3rem",
        contentVisibility: {
          xs: "hidden",
          sm: "hidden",
          md: "visible",
        },
      }}
    >
      <img
        src={
          "https://ik.imagekit.io/htg3gsxgz/The_Verge/verge-adblock.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656872341409"
        }
        alt={"TheVerge AdBlock"}
        style={{ objectFit: "cover", maxWidth: "1100px", width: "100%" }}
      />
    </Box>
  );
}

