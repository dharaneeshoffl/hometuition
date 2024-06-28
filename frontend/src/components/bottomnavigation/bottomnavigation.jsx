import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./bottomnavigation.css"

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box className="bottom-nav-container">
      <BottomNavigation
        className="bottom-navigation"
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          className="bottom-navigation-action"
          label="Home"
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          className="bottom-navigation-action"
          label="Favorites"
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
          className="bottom-navigation-action"
          label="Nearby"
          icon={<LocationOnIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}
