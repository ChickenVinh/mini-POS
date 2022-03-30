import { Container, Box, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import MenuItem from "../components/MenuItem";
import { menu } from "../resources/menu";
import user from "../resources/user.png";
import { useDispatch, useSelector } from "react-redux";
import { addTable, addCartPrice } from "../actions";
import Cart from "../components/Cart";

function Order() {
  const dispatch = useDispatch();
  const { floor, table } = useParams();
  const [menuData] = useState(menu);
  const [cartPrice, setCartPrice] = useState(0);
  const items = useSelector((state) => state.tables.byId[table].items);
  const quantities = useSelector(
    (state) => state.tables.byId[table].quantities
  );

  useEffect(() => {
    dispatch(addTable(table));
  }, [dispatch, table]);

  useEffect(() => {
    let price = 0;
    items.map((item, index) => {
      price += menuData[item - 1].price * quantities[index];
      return 0;
    });
    setCartPrice(price);
  }, [items, menuData, quantities]);

  useEffect(() => {
    dispatch(addCartPrice(cartPrice, table));
  }, [dispatch, cartPrice, table]);

  return (
    <Container maxWidth="md" height="100vh">
      <Box display="flex">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 1,
            gridTemplateAreas: `"header header header header"`,
            width: "75vw",
            marginBottom: "100px",
            marginRight: "20px",
          }}
        >
          <Box sx={{ width: "100%", gridArea: "header" }}>
            <h1>
              Order for {floor}, Table: {table}
            </h1>
          </Box>
          {menuData.map((item) => {
            return (
              <MenuItem
                key={item.id}
                id={item.id}
                color={item.color}
                name={item.name}
                floor={floor}
                table={table}
              />
            );
          })}
        </Box>
        <Box
          sx={{
            width: "25vw",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            bgcolor: "#fafafa",
            overflow: "auto",
          }}
        >
          <Box sx={{ margin: "10px", display: "flex" }}>
            <Box
              sx={{
                alignItems: "center",
                display: "grid",
                gridAutoColumns: "1fr",
                gap: 1,
              }}
            >
              <img
                alt=""
                src={user}
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                }}
              />
              <p
                style={{
                  marginLeft: "10px",
                }}
              >
                Admin
              </p>
              <Button style={{ gridRow: "1", gridColumn: "4/5" }}>
                {cartPrice + "€"}
              </Button>
            </Box>
          </Box>
          {<Cart table={table} />}
          <Box flexGrow={1} />
          <Button>
            <Link to="/home">Zurück</Link>
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Order;
