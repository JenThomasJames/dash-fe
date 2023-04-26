import { Divider } from "@mui/material";
import { useState } from "react";
import PriceBreakup from "../components/PriceBreakup";
import BackdropSpinner from "../components/spinner/BackdropSpinner";
import Toast from "../components/Toast";
import { useCart } from "../context/CartContext";
import EmptyCart from "../assets/happy.svg";
import OrderSummary from "../components/OrderSummary";

const shippingCharge = 40;
const discountPercentage = 20;

const CartPage = () => {
  const [toast, setToast] = useState({
    show: false,
    severity: "error",
    message: "",
  });
  const { cartItems, total } = useCart();
  let discount = (total * (discountPercentage / 100.0)).toFixed(2);
  let grandTotal = total - discount + shippingCharge;
  let roundOff = "0." + grandTotal.toString().split(".")[1];

  if (cartItems.length === 0) {
    return (
      <div className="flex gap-5 items-center flex-col min-w-full justify-center">
        <img src={EmptyCart} alt="" width={700} />
        <p className="text-2xl text-red-300">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5">
      <Toast open={toast.show} setOpen={setToast} severity={toast.severity}>
        {toast.message}
      </Toast>
      <div className="flex justify-center items-center gap-4">
        <div className="flex flex-col px-5 py-3 border border-slate-100 rounded-md w-1/3 gap-9">
          <h1 className="text-slate-500 font-semibold text-4xl">
            Cart Summary
          </h1>
          <div className="flex flex-col gap-3">
            <PriceBreakup title="Total" amount={total.toFixed(2)} />
            <PriceBreakup
              title={"Discount (" + discountPercentage + "%)"}
              amount={discount}
            />
            <PriceBreakup title="Shipping" amount={shippingCharge.toFixed(2)} />
            <PriceBreakup
              title="Round Off"
              amount={isNaN(roundOff) ? 0.0 : Number(roundOff).toFixed(2)}
            />
          </div>
          <Divider />
          <div className="flex justify-between">
            <p className="text-xl text-slate-400">Grand Total</p>
            <p className="text-xl font-semibold text-slate-700">
              Rs.{grandTotal.toFixed(0)}.00
            </p>
          </div>
        </div>
        <div className="flex flex-col px-5 py-3 border border-slate-100 rounded-md w-1/3 gap-9">
          <h1 className="text-slate-500 font-semibold text-4xl">
            Order Summary
          </h1>
          <div className="flex flex-col">
            {cartItems.map((item) => (
              <OrderSummary />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
