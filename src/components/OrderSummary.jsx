import { IconButton } from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import { useCart } from "../context/CartContext";

const OrderSummary = ({ product }) => {
  const { updateQuantity, removeFromCart } = useCart();

  const increaseProductQuantity = () => {
    const newQuantity = product.quantity + 1;
    updateQuantity(product, 1);
    product.quantity = newQuantity;
  };
  const decreaseProductQuantity = () => {
    const newQuantity = product.quantity - 1;
    if (newQuantity === 0) {
      removeFromCart(product.id);
      return;
    }
    updateQuantity(product, -1);
    product.quantity = newQuantity;
  };

  return (
    <div className="flex justify-between bg-slate-50 rounded-lg p-3">
      <div className="flex gap-5 items-center cursor-pointer">
        <img
          className="rounded-md object-fit"
          src={"https://placehold.co/90x90?text=" + product.title + ""}
          alt=""
        />
        <div className="flex flex-col gap-2">
          <h1 className="text-sm font-normal">{product.title}</h1>
          <p className="font-semibold">Rs.{Math.round(product.price * 81)}</p>
        </div>
      </div>
      <div className="flex items-end">
        <div className="flex gap-2">
          <IconButton size="small" onClick={increaseProductQuantity}>
            <AddRoundedIcon />
          </IconButton>
          <input
            className="font-semibold text-center w-12 rounded"
            type="text"
            value={product.quantity}
            readOnly
          />
          <IconButton size="small" onClick={decreaseProductQuantity}>
            <RemoveRoundedIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
