import React from "react";
import { Box } from "@mui/system";
import { Button, Grid, TextField, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import pizza from "../resources/pizza.jpg";
import burger from "../resources/burger.svg";

function Login() {
  let navigate = useNavigate();

  const login = () => {
    let path = "/home";
    navigate(path);
  };

  const numValues = [
    [7, 8, 9],
    [4, 5, 6],
    [1, 2, 3],
    ["AC", 0, "C"],
  ];

  return (
    <Container maxWidth="md" height="100vh">
      {/*left side*/}
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            backgroundImage: `url(${pizza})`,
            backgroundSize: "cover",
            width: "50vw",
            height: "100vh",
          }}
        ></Box>
        {/*right side*/}
        <Box sx={{ width: "50vw", height: "100vh" }}>
          {/*Restaurant logo*/}
          <Box sx={{ mx: "auto", width: "50px", marginTop: "20%" }}>
            <img src={burger} alt="" style={{ height: "100px" }} />
          </Box>
          {/*Textfield, NumPad, Login Button*/}
          <Box sx={{ width: "100%", margin: "35px" }}>
            <TextField varient="standard" sx={{ width: "90%" }} />
            {numValues.map((row, index) => {
              return (
                <Grid
                  container
                  key={index}
                  sx={{ justifyContent: "space-evenly" }}
                >
                  {row.map((col, i) => {
                    return (
                      <Grid item key={i} xs={3}>
                        <Button>{col}</Button>
                      </Grid>
                    );
                  })}
                </Grid>
              );
            })}
            <Button variant="contained" onClick={login} sx={{ width: "90%" }}>
              Login
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default Login;
