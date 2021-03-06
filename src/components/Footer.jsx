import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
//==============================================================================

function Footer() {
  let footerLinks1 = [
    "Terms Of Use",
    "Privacy Notice",
    "Cookie Policy",
    "Do Not Sell My Personal Info",
    "Licensing FAQ",
    "Accessibility",
    "Platform Status",
  ];

  let footerLinks2 = [
    "Contact",
    "Tip Us",
    "Community Guidelines",
    "About",
    "Ethics Statement",
  ];

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          sm: "row",
        },
        alignItems: "center",
        justifyContent: "space-between",
        paddingY: "3rem",
        borderTop: "1px solid #1A1A1A",
        "& p": {
          color: "#e2127A",
          fontSize: "0.8rem",
          transition: "0.1s",
        },
        "& p:hover": {
          cursor: "pointer",
          color: "#fff",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: {xs: "100%", sm: "80%"},
          height: "100%",
        }}
      >
        <svg fill="#fff" viewBox="0 291.4 1280 217.2" width={{xs:"100%", sm: "50%"}}>
          <path d="M0 292.1v58.1h39.7v153.2h67.1V292.1M220.1 372.4h-31.4v-22.3h15.8v-58h-82.8v211.3h67v-79.9h31.4v79.9h67.2V292.1h-67.2M302 503.4h124.3v-58.2h-60.2v-24.6h38.3v-48.2h-38.3v-22.2h60.2v-58.1H302M954.8 363.6c0-45.6-33.7-71.5-81.5-71.5h-74.7v211.2h67.1v-54.1l38.4 54.1h75.7l-54.4-81c19.6-10.7 29.4-30.2 29.4-58.7M865.5 387v-39.3c9.3 0 20.7 2.8 24.1 13 .3.9.5 1.9.8 2.9 0 .1 0 .3.1.4.1 1 .3 2.2.3 3.4 0 15.7-14.3 19.6-25.3 19.6M559.2 420.8h-.6l-4.8-17.4-15-53.1h26.4l17.4-58.2h-134l76.8 211.2h68.8l8.3-22.6s36.8-99.8 56.9-154.2v176.8h124.3v-58.2h-60.2v-24.6h38.2v-48.1h-38.2v-22.2h60.2V292H598l-38.8 128.8zM1280 350.3v-58.1h-124.3v211.2H1280v-58.2h-60.3v-24.6h38.3v-48h-38.3v-22.3"></path>
          <path d="M1142.8 459.1V373H1048v48h35.3v17.1c-2.7 2.4-8.5 3.7-14.5 3.7-24.6 0-42.8-19.4-42.8-43.1s17.7-44.7 42.3-44.7c14.9 0 50.2.1 50.2.1v-62.6h-16.1c-30 0-59.9-2.4-87.4 11.8-21.7 11.2-38.9 30.2-48 52.8-5.3 13.3-8 27.7-8 42 0 59.9 47 110.4 107.9 110.4 30.2 0 59.7-11.3 75.8-25.4.1-14.6.1-16.8.1-24"></path>
        </svg>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginLeft: "2rem",
            lineHeight: "1.5",
          }}
        >
          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            {footerLinks1.map((link) => {
              return (
                <p key={link}>
                  {link}
                  <span
                    style={{
                      color: "#fff",
                      margin: "0 0.5rem",
                      //marginRight: "0.5rem",
                    }}
                  >
                    &bull;
                  </span>
                </p>
              );
            })}
          </Box>
          <Box style={{ display: "flex", flexWrap: "wrap", marginTop: "1rem" }}>
            {footerLinks2.map((link) => {
              return (
                <p key={link}>
                  {link}
                  <span
                    style={{
                      color: "#fff",
                      margin: "0 0.5rem",
                      //marginLeft: "0.5rem",
                      //marginRight: "0.5rem",
                    }}
                  >
                    &bull;
                  </span>
                </p>
              );
            })}
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: {xs: "row", sm:"column"},
          textAlign: {sm:"right"},
          marginTop: {xs: "1rem", sm: "0rem"},
          width: {xs: "100%", sm:"30%"},
          alignItems: {xs: "center", sm:"end"},
          color: "#740961",
          "& p": {
            marginTop: {xs: "0.5rem", sm:"0.9rem"},
          },
          "& span": {
            color: "#FFF",
          },
        }}
      >
        <Box
          component="img"
          src={
            "https://ik.imagekit.io/htg3gsxgz/The_Verge/verge-voxmedia.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656872373973"
          }
          alt={"VoxMedia logo"}
          sx={{height: {xs:"20%", sm: ""}}}
        />
        <Box sx={{marginLeft: {xs: "1rem", sm: "0"}, padding: "0"}}>
        <p>Advertise with us</p>
        <p>Jobs @ Vox Media</p>
        <p style={{ lineHeight: "1.5" }}>
          <span> &copy; 2022 </span> Vox Media
          <span>, LLC. All Rights Reserved</span>
        </p>
        </Box>
      </Box>
    </Container>
  );
}

export default Footer;
