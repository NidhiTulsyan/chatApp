import React, { Suspense, lazy, useState } from "react";
import {
  Add as AddIcon,
  Menu as MenuIcon,
  Search as SearchIcon,
  Group as GroupIcon,
  Logout as LogoutIcon,
  Notifications,
} from "@mui/icons-material";
import {
  AppBar,
  Backdrop,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { orange } from "../constants/Color";
// import SearchDialog from "../specific/Search";
const SearchDialog = lazy(() => import("../specific/Search"));
const NotificationDialog = lazy(() => import("../specific/Notifications"));
const NewGroupDialog = lazy(() => import("../specific/Newgroups"));

const Header = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isNewGroup, setIsNewGroup] = useState(false);
  const [isNotification, setIsNotification] = useState(false);

  const HandleMobile = () => {
    setIsMobile((prev) => !prev);
  };
  const OpenSearch = () => {
    setIsSearch((prev) => !prev);
    console.log("search");
  };
  const OpenNewGroup = () => {
    setIsNewGroup((prev) => !prev);
  };
  const OpenNotifications = () => {
    setIsNotification((prev) => !prev);
  };
  const NavigateToGroup = () => {
    navigate("/groups");
  };
  const LogoutHandler = () => {
    console.log("logout");
  };
  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
        }}
        height={"4rem"}
      >
        <AppBar
          position="static"
          sx={{
            bgcolor: orange,
          }}
        >
          <Toolbar>
            <Typography
              variant="h6"
              sx={{
                display: {
                  xs: "none",
                  sm: "block",
                },
              }}
            >
              FlexChat
            </Typography>
            <Box
              sx={{
                display: {
                  xs: "block",
                  sm: "none",
                },
              }}
            >
              <IconButton color="inherit" onClick={HandleMobile}>
                <MenuIcon />
              </IconButton>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
              }}
            ></Box>
            <Box>
              <IconBtn
                title={"Search"}
                onclick={OpenSearch}
                icon={<SearchIcon />}
              />

              <IconBtn
                title={"new group"}
                onclick={OpenNewGroup}
                icon={<GroupIcon />}
              />

              <IconBtn
                title={"Manage group"}
                onclick={NavigateToGroup}
                icon={<AddIcon />}
              />
              <IconBtn
                title={"Notifications"}
                onclick={OpenNotifications}
                icon={<Notifications />}
              />
              <IconBtn
                title={"LogOut"}
                onclick={LogoutHandler}
                icon={<LogoutIcon />}
              />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      {isSearch && (
        <Suspense fallback={<Backdrop open />}>
          <SearchDialog />
        </Suspense>
      )}
      {isNotification && (
        <Suspense fallback={<Backdrop open />}>
          <NotificationDialog />
        </Suspense>
      )}
      {isNewGroup && (
        <Suspense fallback={<Backdrop open />}>
          <NewGroupDialog />
        </Suspense>
      )}
    </>
  );
};

const IconBtn = ({ title, icon, onclick }) => {
  return (
    <Tooltip title={title}>
      <IconButton color="inherit" size="large" onClick={onclick}>
        {icon}
      </IconButton>
    </Tooltip>
  );
};
export default Header;
