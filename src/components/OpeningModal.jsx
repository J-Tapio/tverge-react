import { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

//==============================================================================

export default function OpeningModal() {
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="opening-modal"
      aria-describedby="opening-modal for site"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "70%",
          bgcolor: "rgba(255,255,255, 1)",
          //border: "2px solid #000",
          borderRadius: "12px",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography id="modal-modal-title" variant="h4" component="h2">
          The Verge Clone
        </Typography>
        <Typography sx={{ mt: 2 }}>
          This is my personal project where I wanted to learn use of{" "}
          <b>MaterialUI</b> and clone <b>The Verge</b> site. Currently works best with Chrome browser considering the outlook of the page. Solution pending for Firefox with font issue.
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Backend for this project was written in <b>Go</b>. The backend handles
          scraping from <b>The Verge</b> hourly and provides latest news
          article links with images and titles.
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Due to possibility that <b>The Verge</b> undergo overhaul of their site or
          even minor changes to classnames and/or elements are made within the
          site, it is expected that backend might not be able to provide the
          news or some data might be missing.
        </Typography>
        <Typography sx={{ mt: 2 }}>
          I try to frequently check that the scraper is up to date with{" "}
          <b>The Verge</b>.
        </Typography>
        <Typography sx={{ mt: 3 }}>
          <b>Click outside of the box to close</b>
        </Typography>
      </Box>
    </Modal>
  );
}
