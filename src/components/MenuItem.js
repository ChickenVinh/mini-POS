import { Button } from "@mui/material";
import * as React from "react";
import { addToCart } from "../actions";
import { useDispatch } from "react-redux";

function MenuItem(props) {
  const dispatch = useDispatch();

  return (
    <Button
      onClick={() => dispatch(addToCart(props.id, props.floor, props.table))}
      sx={{
        color: "black",
        bgcolor: props.color,
        height: "75px",
        width: "150px",
      }}
    >
      {props.id + ". " + props.name}
    </Button>
  );
}

export default MenuItem;
