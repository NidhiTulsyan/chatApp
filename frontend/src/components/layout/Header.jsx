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
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
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
            bgcolor: "orange",
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
                title={"Serach"}
                onClick={OpenSearch}
                icon={<SearchIcon />}
              />

              <IconBtn
                title={"new group"}
                onClick={OpenNewGroup}
                icon={<GroupIcon />}
              />

              <IconBtn
                title={"Manage group"}
                onClick={NavigateToGroup}
                icon={<AddIcon />}
              />
              <IconBtn
                title={"Notifications"}
                onClick={OpenNotifications}
                icon={<Notifications />}
              />
              <IconBtn
                title={"LogOut"}
                onClick={LogoutHandler}
                icon={<LogoutIcon />}
              />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      {isSearch && (
        <Suspense fallback={<div>Loading...</div>}>
          <SearchDialog />
        </Suspense>
      )}
      {isNotification && (
        <Suspense fallback={<div>Loading...</div>}>
          <NotificationDialog />
        </Suspense>
      )}
      {isNewGroup && (
        <Suspense fallback={<div>Loading...</div>}>
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
