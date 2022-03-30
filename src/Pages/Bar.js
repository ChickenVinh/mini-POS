import * as React from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Bar() {
  let price9 = useSelector((state) => state.tables.byId["9"].cartPrice);
  let price10 = useSelector((state) => state.tables.byId["10"].cartPrice);
  let price11 = useSelector((state) => state.tables.byId["11"].cartPrice);
  let price12 = useSelector((state) => state.tables.byId["12"].cartPrice);

  return (
    <div>
      <h1>Floor 3</h1>
      <Box
        sx={{
          display: "grid",
          width: "130px",
          height: "75px",
          bgcolor: "#add8e6",
          position: "add8e6",
          top: "110px",
          right: "660px",
        }}
      >
        <Link
          to="/order/Bar/9"
          style={{ width: "100%", height: "100%", textAlign: "center" }}
        >
          9<div style={{ marginTop: "30px" }}>{price9 + "€"}</div>
        </Link>
      </Box>
      <Box
        sx={{
          display: "grid",
          width: "200px",
          height: "90px",
          bgcolor: "#add8e6",
          position: "absolute",
          top: "100px",
          right: "375px",
        }}
      >
        <Link
          to="/order/Bar/10"
          style={{ width: "100%", height: "100%", textAlign: "center" }}
        >
          10<div style={{ marginTop: "30px" }}>{price10 + "€"}</div>
        </Link>
      </Box>
      <Box
        sx={{
          display: "grid",
          width: "130px",
          height: "75px",
          bgcolor: "#add8e6",
          position: "absolute",
          top: "250px",
          right: "620px",
        }}
      >
        <Link
          to="/order/Bar/11"
          style={{ width: "100%", height: "100%", textAlign: "center" }}
        >
          11<div style={{ marginTop: "30px" }}>{price11 + "€"}</div>
        </Link>
      </Box>
      <Box
        sx={{
          display: "grid",
          width: "110px",
          height: "110px",
          bgcolor: "#add8e6",
          position: "absolute",
          top: "250px",
          right: "425px",
        }}
      >
        <Link
          to="/order/Bar/12"
          style={{ width: "100%", height: "100%", textAlign: "center" }}
        >
          12<div style={{ marginTop: "30px" }}>{price12 + "€"}</div>
        </Link>
      </Box>
    </div>
  );
}

export default Bar;
