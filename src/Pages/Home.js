import { Link } from "react-router-dom";
import { Container, Box, Button } from "@mui/material";
import user from "../resources/user.png";
import { useState, useEffect } from "react";
import Erdgeschoss from "./Erdgeschoss";
import Obergeschoss from "./Obergeschoss";
import Bar from "./Bar";

function Home() {
  var [time, setTime] = useState(new Date());
  var [floor, setFloor] = useState(1);

  useEffect(() => {
    var timer = setInterval(() => setTime(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <Container maxWidth="md" height="100vh">
      <Box display="flex">
        {/*Sidebar*/}
        <Box
          sx={{
            width: "25vw",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            bgcolor: "#fafafa",
          }}
        >
          <Box sx={{ margin: "10px", display: "flex" }}>
            <img
              alt=""
              src={user}
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
              }}
            />
            <Box
              sx={{
                alignItems: "center",
                display: "grid",
                gridAutoColumns: "1fr",
                gap: 1,
              }}
            >
              <p
                style={{
                  gridRow: "1",
                  gridColumn: "span 2",
                  marginLeft: "10px",
                }}
              >
                Admin
              </p>
              <p style={{ gridRow: "1", gridColumn: "4/5" }}>
                {time.toLocaleTimeString("en-GB")}
              </p>
            </Box>
          </Box>
          <Box>
            <Button sx={{ width: "100%" }} onClick={() => setFloor(1)}>
              Erdgeschoss
            </Button>
            <Button sx={{ width: "100%" }} onClick={() => setFloor(2)}>
              Obergeschoss
            </Button>
            <Button sx={{ width: "100%" }} onClick={() => setFloor(3)}>
              Bar
            </Button>
          </Box>
          <Box flexGrow={1} />
          <Button>
            <Link to="/">Abmelden</Link>
          </Button>
        </Box>
        {/*Tableplan*/}
        <Box
          sx={{
            width: "75vw",
            height: "100vh",
          }}
        >
          {(() => {
            switch (floor) {
              case 1:
                return <Erdgeschoss />;
              case 2:
                return <Obergeschoss />;
              case 3:
                return <Bar />;
              default:
                return <Erdgeschoss />;
            }
          })()}
        </Box>
      </Box>
    </Container>
  );
}

export default Home;
