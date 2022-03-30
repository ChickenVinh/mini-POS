import * as React from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Obergeschoss() {
  let price5 = useSelector((state) => state.tables.byId["5"].cartPrice);
  let price6 = useSelector((state) => state.tables.byId["6"].cartPrice);
  let price7 = useSelector((state) => state.tables.byId["7"].cartPrice);
  let price8 = useSelector((state) => state.tables.byId["8"].cartPrice);

  return (
    <div>
      <h1>Obergeschoss</h1>
      <Box
        sx={{
          display: "grid",
          width: "130px",
          height: "75px",
          bgcolor: "#90EE90",
          position: "absolute",
          top: "110px",
          right: "660px",
        }}
      >
        <Link
          to="/order/Obergeschoss/5"
          style={{ width: "100%", height: "100%", textAlign: "center" }}
        >
          5<div style={{ marginTop: "30px" }}>{price5 + "€"}</div>
        </Link>
      </Box>
      <Box
        sx={{
          display: "grid",
          width: "200px",
          height: "90px",
          bgcolor: "#90EE90",
          position: "absolute",
          top: "100px",
          right: "375px",
        }}
      >
        <Link
          to="/order/Obergeschoss/6"
          style={{ width: "100%", height: "100%", textAlign: "center" }}
        >
          6<div style={{ marginTop: "30px" }}>{price6 + "€"}</div>
        </Link>
      </Box>
      <Box
        sx={{
          display: "grid",
          width: "130px",
          height: "75px",
          bgcolor: "#90EE90",
          position: "absolute",
          top: "250px",
          right: "620px",
        }}
      >
        <Link
          to="/order/Obergeschoss/7"
          style={{ width: "100%", height: "100%", textAlign: "center" }}
        >
          7<div style={{ marginTop: "30px" }}>{price7 + "€"}</div>
        </Link>
      </Box>
      <Box
        sx={{
          display: "grid",
          width: "110px",
          height: "110px",
          bgcolor: "#90EE90",
          position: "absolute",
          top: "250px",
          right: "425px",
        }}
      >
        <Link
          to="/order/Obergeschoss/8"
          style={{ width: "100%", height: "100%", textAlign: "center" }}
        >
          8<div style={{ marginTop: "30px" }}>{price8 + "€"}</div>
        </Link>
      </Box>
    </div>
  );
}

export default Obergeschoss;
