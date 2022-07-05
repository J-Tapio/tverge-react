import { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FaceBookIcon from "@mui/icons-material/FacebookSharp";
import TwitterIcon from "@mui/icons-material/Twitter";
import RssFeedIcon from "@mui/icons-material/RssFeed";

//==============================================================================

function NavLink({ obj }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid item key={obj.header} sx={{ display: obj.display }}>
      <Button
        id={obj.header}
        variant="text"
        aria-controls={open ? "navlink-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleOpen}
        sx={{
          padding: "0",
          paddingX: ".5rem",
          borderRadius: "0",
          "&:hover": {
            backgroundColor: "#1a1a1a",
            color: "#d9d9d9",
          },
          "&:hover svg": {
            color: "#d9d9d9",
          },
        }}
      >
        <Typography
          sx={{
            position: "relative",
            top: "0.2rem",
            letterSpacing: "1.035px",
            fontSize: "1.3rem",
            fontFamily: "Heroic",
            fontWeight: "500",
            color: "#fff",
            lineHeight: "44px",
          }}
        >
          {obj.header}
        </Typography>
        {obj.links !== undefined && (
          <ArrowDropDownIcon
            sx={{
              position: "relative",
              top: "0.2rem",
              color: "#b30e61",
              transition: "0.125s",
            }}
          />
        )}
      </Button>
      {obj.links !== undefined && (
        <Menu
          id="navlink-menu"
          anchorEl={anchorEl}
          open={open}
          onClick={handleClose}
          MenuListProps={{
            "aria-labelledby": obj.header,
          }}
          sx={{
            "& .MuiMenu-paper": {
              fontSize: ".8rem",
              color: "#fff",
              bgcolor: "#1a1a1a",
            }
          }}
        >
          <Grid container direction="row" rowSpacing={2}justifyContent="flex-start" sx={{padding: ".5rem"}}>
          {obj.links.map((link) => (
            <Grid item xs={4}>
              {link}
            </Grid>
          ))}
          </Grid>
        </Menu>
      )}
    </Grid>
  );
}

export default function Navigation() {
  const headersAndLinks = [
    {
      header: "TECH",
      links: [
        "Video",
        "Amazon",
        "Apple",
        "Facebook",
        "Google",
        "Microsoft",
        "Samsung",
        "Tesla",
        "AI",
        "Cars",
        "Cybersecurity",
        "Mobile",
        "Policy",
        "Privacy",
        "Scooters",
      ],
    },
    {
      header: "REVIEWS",
      links: [
        "Phones",
        "Laptops",
        "Headphones",
        "Books",
        "Cameras",
        "Tablets",
        "Smartwatches",
        "Speakers",
        "Drones",
        "Accessories",
        "Buying Guides",
        "How-tos",
        "Deals",
      ],
      display: {
        xs: "none",
        sm: "inline",
      },
    },
    {
      header: "SCIENCE",
      links: [
        "Video",
        "Space",
        "NASA",
        "SpaceX",
        "Health",
        "Energy",
        "Environment",
      ],
      display: {
        xs: "none",
        md: "inline",
      },
    },
    {
      header: "CREATORS",
      links: [
        "YouTube",
        "Instagram",
        "Adobe",
        "Kickstarter",
        "Tumblr",
        "Art Club",
        "Cameras",
        "Photography",
        "What's in your bag?",
      ],
      display: {
        xs: "none",
        md: "inline",
      },
    },
    {
      header: "ENTERTAINMENT",
      links: [
        "Film",
        "TV",
        "Games",
        "Fortnite",
        "Game of Thrones",
        "Books",
        "Comics",
        "Music",
      ],
    },
    {
      header: "VIDEO",
      display: {
        xs: "none",
        lg: "inline",
      },
    },
    {
      header: "FEATURES",
      display: {
        xs: "none",
        lg: "inline",
      },
    },
    {
      header: "PODCASTS",
      display: {
        xs: "none",
        lg: "inline",
      },
    },
    {
      header: "MORE",
      links: ["NEWSLETTERS", "STORE"],
    },
  ];

  return (
    <Box
      sx={{
        margin: "0 auto",
        borderTop: "1px solid #1A1A1A",
        borderBottom: "1px solid #1A1A1A",
      }}
    >
      <Grid
        container
        direction="row"
        alignItems={"baseline"}
        justifyContent={"center"}
        rowGap={0}
        sx={{
          height: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {headersAndLinks.map((obj) => {
          return (
            <NavLink obj={obj} />
            /*  <Grid item key={obj.header} sx={{ display: obj.display }}>
              <Button
                id={obj.header}
                variant="text"
                sx={{
                  padding: "0",
                  paddingX: ".5rem",
                  borderRadius: "0",
                  "&:hover": {
                    backgroundColor: "#1a1a1a",
                    color: "#d9d9d9",
                  },
                  "&:hover svg": {
                    color: "#d9d9d9",
                  },
                }}
              >
                <Typography
                  sx={{
                    position: "relative",
                    top: "0.2rem",
                    letterSpacing: "1.035px",
                    fontSize: "1.3rem",
                    fontFamily: "Heroic",
                    fontWeight: "500",
                    color: "#fff",
                    lineHeight: "44px",
                  }}
                >
                  {obj.header}
                </Typography>
                {"links" in obj && (
                  <ArrowDropDownIcon
                    sx={{
                      position: "relative",
                      top: "0.2rem",
                      color: "#b30e61",
                      transition: "0.125s",
                    }}
                  />
                )}
              </Button>
            </Grid> */
          );
        })}
        <Grid
          item
          sx={{
            marginLeft: "2rem",
            "& button": {
              color: "#e2127A",
              transition: "0.125s",
              padding: "0",
              margin: "0",
            },
            "& button:nth-of-type(2)": {
              paddingLeft: "0.5rem",
            },
            "& button:nth-of-type(3)": {
              paddingLeft: "0.5rem",
            },
            "& button:hover": { color: "#fff" },
          }}
        >
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "block",
              },
            }}
          >
            <IconButton>
              <FaceBookIcon />
            </IconButton>
            <IconButton>
              <TwitterIcon />
            </IconButton>
            <IconButton>
              <RssFeedIcon />
            </IconButton>
          </Box>
        </Grid>
        <Grid
          item
          sx={{
            marginLeft: "0.7rem",
            color: "#fff",
            "& button": {
              color: "#fff",
              margin: "0",
            },
          }}
        >
          <IconButton
            sx={{
              borderRadius: "0",
              "&:hover": {
                backgroundColor: "#1a1a1a",
              },
            }}
          >
            <PersonIcon />
          </IconButton>
          <IconButton>
            <SearchIcon
              sx={{
                "&:hover": {
                  color: "#d9d9d9",
                },
              }}
            />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
}
