import * as React from "react";
import { menu } from "../resources/menu";
import { useState } from "react";
import { Grid, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, addToCart } from "../actions";

function Cart(props) {
  const items = useSelector((state) => state.tables.byId[props.table].items);
  const quantities = useSelector(
    (state) => state.tables.byId[props.table].quantities
  );
  const [menuData] = useState(menu);
  const dispatch = useDispatch();

  return (
    <div>
      {items.map((item, index) => {
        return (
          <Grid container sx={{ marginBottom: "30px" }} key={item}>
            <Grid item xs={6}>
              {item + "."} {menuData[item - 1].name}
            </Grid>
            <Grid item xs={6}>
              <IconButton
                color="error"
                onClick={() => {
                  dispatch(removeFromCart(item, props.table));
                }}
              >
                <RemoveIcon />
              </IconButton>
              {quantities[index]}
              <IconButton
                onClick={() => {
                  dispatch(addToCart(item, props.floor, props.table));
                }}
              >
                <AddIcon />
              </IconButton>
            </Grid>
            <Grid item xs={12}>
              {menuData[item - 1].price * quantities[index]}
            </Grid>
          </Grid>
        );
      })}
    </div>
  );
}

export default Cart;
