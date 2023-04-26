import { useEffect, useState } from "react";
import AppButton from "../components/AppButton";
import ShoeImage from "../assets/shoe.png";
import BackdropSpinner from "../components/spinner/BackdropSpinner";
import Toast from "../components/Toast";
import { getAllProducts } from "../utils/api-calls";
import ProductCard from "../components/ProductCard";
const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState({
    show: false,
    severity: "error",
    message: "",
  });
  useEffect(() => {
    const fetchAllProducts = async () => {
      setIsLoading(true);
      try {
        const productsResponse = await getAllProducts();
        setProducts(productsResponse.data);
      } catch (error) {
        console.log(error.message);
        setToast({
          show: true,
          severity: "error",
          message: "Something went wrong",
        });
      } finally {
        setIsLoading(false);
      }
    };
    fetchAllProducts();
  }, []);
  return (
    <div className="flex flex-col gap-5">
      <BackdropSpinner isLoading={isLoading} />
      <Toast open={toast.show} setOpen={setToast} severity={toast.severity}>
        {toast.message}
      </Toast>
      {/* Jumbotron */}
      <div className="min-w-full rounded-xl p-12 flex justify-around items-center bg-purple-200">
        <div className="flex flex-col gap-7">
          <h1 className="text-6xl text-slate-800 font-bold">
            Grab upto 70% off on select shoe brands
          </h1>
          <div>
            <AppButton>View Deals</AppButton>
          </div>
        </div>
        <img className="max-w-sm" src={ShoeImage} alt="shoe" />
      </div>
      <h1 className="text-xl font-semibold">Top Products</h1>
      <div className="flex justify-center flex-wrap">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
