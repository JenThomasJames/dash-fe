import { useState } from "react";
import { Card, CardContent, CardActions, TextField } from "@mui/material";
import AppButton from "./AppButton";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(0);
  const { addToCart, cartItems, updateQuantity } = useCart();

  const quantityChangeHandler = (event) => {
    setQuantity(event.target.value);
  };

  const addToCartHandler = () => {
    const indexOfItemInCart = cartItems.findIndex(
      (item) => item.id === product.id
    );
    if (indexOfItemInCart !== -1) {
      updateQuantity(product, parseInt(quantity));
    } else {
      addToCart({ ...product, quantity: parseInt(quantity) });
    }
  };

  return (
    <Card
      sx={{
        width: 370,
        maxHeight: 645,
        margin: 5,
        display: "flex",
        flexDirection: "column",
        padding: 2,
      }}
    >
      <div className="flex flex-col">
        <img
          className="rounded-md object-fit"
          src={"https://placehold.co/600x400?text=" + product.title + ""}
          alt=""
        />
        <CardContent>
          <div className="flex justify-between">
            <h1 className="text-md font-bold text-slate-700">
              {product.title.length > 20
                ? product.title.substr(0, 20) + "..."
                : product.title}
            </h1>
            <h1 className="font-semibold text-xl text-purple-700">
              Rs.{Math.round(product.price * 81)}
            </h1>
          </div>
        </CardContent>
        <CardActions>
          <div className="flex items-center justify-between min-w-full">
            <TextField
              value={quantity}
              onChange={quantityChangeHandler}
              id="outlined-number"
              label="Quantity"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              sx={{
                maxWidth: 100,
              }}
              size="small"
              inputProps={{
                max: 15,
                min: 0,
                maxLength: 2,
              }}
            />
            <AppButton onClick={addToCartHandler}>Add to Cart</AppButton>
          </div>
        </CardActions>
      </div>
    </Card>
  );
};

export default ProductCard;
