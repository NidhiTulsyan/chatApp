import React, { useState } from "react";
import {
  Avatar,
  Button,
  Container,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { CameraAlt as CameraAltIcon } from "@mui/icons-material";
import { VisuallyHiddenInput } from "../components/styles/styledComponents";


const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const toggleLogin = () => setIsLogin(!isLogin);
  return (
    <Container
      component={"main"}
      maxWidth="xs"
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {isLogin ? (
          <>
            <Typography variant="h5">Login</Typography>
            <form
              style={{
                width: "100%",
                marginTop: "1rem",
              }}
            >
              <TextField
                required
                fullWidth
                variant="outlined"
                margin="normal"
                label="Username"
              ></TextField>

              <TextField
                required
                fullWidth
                variant="outlined"
                margin="normal"
                type="password"
                label="Password"
              ></TextField>

              <Button
                sx={{
                  marginTop: "1rem",
                }}
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
              >
                Login
              </Button>

              <Typography textAlign={"center"} m={"1rem"}>
                OR
              </Typography>

              <Button fullWidth variant="text" onClick={toggleLogin}>
                Sign Up Instead
              </Button>
            </form>
          </>
        ) : (
          <>
            <Typography variant="h5">Sign Up</Typography>
            <form
              style={{
                width: "100%",
                marginTop: "1rem",
              }}
            >
              <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                <Avatar
                  sx={{ width: "10rem", height: "10rem", objectFit: "contain" }}
                />
                <IconButton
                //   sx={{
                //     position: "absolute",
                //     bottom: 0,
                //     right: 0,
                //     bgcolor: "rgba(0,0,0,0.5)",
                //     ":hover": { bgcolor: "rgba(0,0,0,0.7)" },
                //   }}
                >
                  <>
                    <CameraAltIcon />
                    <VisuallyHiddenInput type="file"> </VisuallyHiddenInput>
                  </>
                </IconButton>
              </Stack>
              <TextField
                required
                fullWidth
                variant="outlined"
                margin="normal"
                label="Name"
              ></TextField>

              <TextField
                required
                fullWidth
                variant="outlined"
                margin="normal"
                label="Bio"
              ></TextField>

              <TextField
                required
                fullWidth
                variant="outlined"
                margin="normal"
                label="Username"
              ></TextField>
              <TextField
                required
                fullWidth
                variant="outlined"
                margin="normal"
                type="password"
                label="Password"
              ></TextField>

              <Button
                sx={{
                  marginTop: "1rem",
                }}
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
              >
                Sign Up
              </Button>

              <Typography textAlign={"center"} m={"1rem"}>
                OR
              </Typography>

              <Button
                //   sx={{
                //     marginTop: "1rem",
                //   }}
                fullWidth
                variant="text"
                onClick={toggleLogin}
              >
                Login Instead
              </Button>
            </form>
          </>
        )}
      </Paper>
    </Container>
  );
};

export default Login;
