import { Card } from "@mui/material";

function CartItem(props) {
  return (
    <Card>
      {props.name + " "}
      {props.quantity + " "}
      {props.price + " "}
    </Card>
  );
}

export default CartItem;
