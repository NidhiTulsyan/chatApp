import { Avatar, Stack, Typography } from "@mui/material";
import React from "react";
import {
  Face as FaceIcon,
  CalendarMonth as CalendarIcon,
  AlternateEmail as UserNameIcon,
} from "@mui/icons-material";
import moment from'moment';

const Profile = () => {
  return (
    <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
      <Avatar
        sx={{
          width: 200,
          height: 200,
          objectFit: "contain",
          marginBottom: "1rem",
          border: "5px solid white",
        }}
      />
      <ProfileCard heading={"bio"} text={"i m doing this"} />
      <ProfileCard heading={"Username"} text={"nt"} Icon={<UserNameIcon />} />
      <ProfileCard heading={"Name"} text={"nidhi"} Icon={<FaceIcon />} />
      <ProfileCard heading={"Joined"} text={moment("2024-03-20T18:30:00.000Z").fromNow()} Icon={<CalendarIcon />} />
    </Stack>
  );
};
const ProfileCard = ({ text, Icon, heading }) => (
  <Stack
    direction={"row"}
    alignItems={"center"}
    spacing={"1rem"}
    color={"white"}
    textAlign={"center"}
  >
    {Icon && Icon}
    <Stack>
      <Typography variant="body1">{text}</Typography>
      <Typography color={"gray"} variant="captain">
        {heading}
      </Typography>
    </Stack>
  </Stack>
);
export default Profile;
