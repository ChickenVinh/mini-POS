import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Erdgeschoss() {
  let price1 = useSelector((state) => state.tables.byId["1"].cartPrice);
  let price2 = useSelector((state) => state.tables.byId["2"].cartPrice);
  let price3 = useSelector((state) => state.tables.byId["3"].cartPrice);
  let price4 = useSelector((state) => state.tables.byId["4"].cartPrice);

  return (
    <div>
      <h1>Erdgeschoss</h1>
      <Box
        sx={{
          display: "grid",
          width: "130px",
          height: "75px",
          bgcolor: "#FF9999",
          position: "absolute",
          top: "90px",
          right: "660px",
        }}
      >
        <Link
          to="/order/Erdgeschoss/1"
          style={{ width: "100%", height: "100%", textAlign: "center" }}
        >
          1<div style={{ marginTop: "30px" }}>{price1 + "€"}</div>
        </Link>
      </Box>
      <Box
        sx={{
          display: "grid",
          width: "200px",
          height: "75px",
          bgcolor: "#FF9999",
          position: "absolute",
          top: "90px",
          right: "375px",
        }}
      >
        <Link
          to="/order/Erdgeschoss/2"
          style={{ width: "100%", height: "100%", textAlign: "center" }}
        >
          2<div style={{ marginTop: "30px" }}>{price2 + "€"}</div>
        </Link>
      </Box>
      <Box
        sx={{
          display: "grid",
          width: "130px",
          height: "75px",
          bgcolor: "#FF9999",
          position: "absolute",
          top: "250px",
          right: "660px",
        }}
      >
        <Link
          to="/order/Erdgeschoss/3"
          style={{ width: "100%", height: "100%", textAlign: "center" }}
        >
          3<div style={{ marginTop: "30px" }}>{price3 + "€"}</div>
        </Link>
      </Box>
      <Box
        sx={{
          display: "grid",
          width: "130px",
          height: "100px",
          bgcolor: "#FF9999",
          position: "absolute",
          top: "275px",
          right: "375px",
        }}
      >
        <Link
          to="/order/Erdgeschoss/4"
          style={{ width: "100%", height: "100%", textAlign: "center" }}
        >
          4<div style={{ marginTop: "30px" }}>{price4 + "€"}</div>
        </Link>
      </Box>
    </div>
  );
}

export default Erdgeschoss;
