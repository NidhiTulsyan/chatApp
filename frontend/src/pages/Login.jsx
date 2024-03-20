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
import { VisuallyHiddenInput } from "../components/styles/StylesComponents";
import { useFileHandler, useInputValidation, useStrongPassword } from "6pp";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const toggleLogin = () => setIsLogin(!isLogin);
  const name = useInputValidation("");
  const bio = useInputValidation("");
  const password = useStrongPassword();
  const username = useInputValidation("");
  const avatar = useFileHandler("single");
  const handleLogin = (e) => {
    e.preventDefault();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
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
              onSubmit={handleLogin}
            >
              <TextField
                required
                fullWidth
                variant="outlined"
                margin="normal"
                label="Username"
                value={username.value}
                onChange={username.changeHandler}
              ></TextField>

              <TextField
                required
                fullWidth
                variant="outlined"
                margin="normal"
                type="password"
                label="Password"
                value={password.value}
                onChange={password.changeHandler}
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
              onSubmit={handleSubmit}
            >
              <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                <Avatar
                  sx={{ width: "10rem", height: "10rem", objectFit: "contain" }}
                  src={avatar.preview}
                />

                <IconButton
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    color: "white",
                    bgcolor: "rgba(0,0,0,0.5)",
                    ":hover": { bgcolor: "rgba(0,0,0,0.7)" },
                  }}
                  component="label"
                >
                  <>
                    <CameraAltIcon />
                    <VisuallyHiddenInput
                      type="file"
                      onChange={avatar.changeHandler}
                    />
                  </>
                </IconButton>
              </Stack>
              {avatar.error && (
                <Typography
                  color="error"
                  variant="caption"
                  m={"1rem auto"}
                  width={"fit-content"}
                  display={"block"}
                >
                  {avatar.error}
                </Typography>
              )}
              <TextField
                required
                fullWidth
                variant="outlined"
                margin="normal"
                label="Name"
                value={name.value}
                onChange={name.changeHandler}
              ></TextField>

              <TextField
                required
                fullWidth
                variant="outlined"
                margin="normal"
                label="Bio"
                value={bio.value}
                onChange={bio.changeHandler}
              ></TextField>

              <TextField
                required
                fullWidth
                variant="outlined"
                margin="normal"
                label="Username"
                value={username.value}
                onChange={username.changeHandler}
              ></TextField>

              <TextField
                required
                fullWidth
                variant="outlined"
                margin="normal"
                type="password"
                label="Password"
                value={password.value}
                onChange={password.changeHandler}
              ></TextField>

              {password.error && (
                <Typography color="error" variant="caption">
                  {password.error}
                </Typography>
              )}

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

              <Button fullWidth variant="text" onClick={toggleLogin}>
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
