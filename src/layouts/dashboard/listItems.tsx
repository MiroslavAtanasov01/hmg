import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import Groups2Icon from "@mui/icons-material/Groups2";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import { Link } from "react-router-dom";

export const mainListItems = (
  <React.Fragment>
    <ListItemButton component={Link} to="/">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton component={Link} to="/players">
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Players" />
    </ListItemButton>
    <ListItemButton component={Link} to="/teams">
      <ListItemIcon>
        <Groups2Icon />
      </ListItemIcon>
      <ListItemText primary="Teams" />
    </ListItemButton>
    <ListItemButton component={Link} to="/games">
      <ListItemIcon>
        <SportsBasketballIcon />
      </ListItemIcon>
      <ListItemText primary="Games" />
    </ListItemButton>
    <ListItemButton component={Link} to="/stats">
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Stats" />
    </ListItemButton>
  </React.Fragment>
);
