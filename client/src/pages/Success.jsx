import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { userRequest } from "../requestMethods";
import { useNavigate } from 'react-router-dom';

const Success = () => {
  const location = useLocation();
  const currentUser = useSelector((state) => state.user.currentUser);
  const [orderId, setOrderId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state) {
      const data = location.state.stripeData;
      const cart = location.state.cart;
      
      const createOrder = async () => {
        try {
          const res = await userRequest.post("/orders", {
            userId: currentUser._id,
            products: cart.products.map((item) => ({
              productId: item._id,
              quantity: item._quantity,
            })),
            amount: cart.total,
            address: data.billing_details.address,
          });
          setOrderId(res.data._id);
        } catch (error) {
          console.error("Error creating order:", error);
        }
      };
      
      createOrder();
    }
  }, [location.state, currentUser]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {orderId
        ? `Order has been created successfully. Your order number is ${orderId}`
        : `Successfull. Your order is being prepared...`}
      <button onClick = {()=>navigate("/")} type="button" style={{ padding: 10, marginTop: 20 }}>Go to Homepage</button>
    </div>
  );
};

export default Success;
