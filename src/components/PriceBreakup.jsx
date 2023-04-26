import React from "react";

const PriceBreakup = ({ title, amount }) => {
  return (
    <div className="flex justify-between">
      <p className="text-xl text-slate-400">{title}</p>
      <p className="text-xl font-semibold text-slate-700">Rs. {amount}</p>
    </div>
  );
};

export default PriceBreakup;
