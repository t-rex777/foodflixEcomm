import React, { useEffect, useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import { isAuthenticated } from "../Auth/helper";
import "./cart.css";
import Base from "./../Base/Base";

import {
  deleteProductFromCart,
  getAllProductsFromCart,
  stripePayment,
  updateProductFromCart,
} from "./helper";

function Cart() {
  const {
    user,
    token,
  } = isAuthenticated();
  const [products, setProducts] = useState([]);
  const [grandTotal, setTotal] = useState(0);

  useEffect(() => {
    console.log(isAuthenticated());
    getAllProductsFromCart(user._id, token).then((data) => {
      setProducts(data);
      let total = 0;
      data.map((pro) => {
        let subTotal = pro.price * pro.quantity;
        total = total + subTotal;
      });
      setTotal(total);
    });
  }, []);
  

  const makePayment = (token) => {
    stripePayment(token,products)
      .then(res=>console.log("Payment successfully",res))
      .catch((err) => console.log(err));
  };

  return (
    <Base header="Cart">
      <div className="cart">
        <div className="left">
          <table>
            <thead>
              <tr>
                <td>
                  <strong>Product</strong>
                </td>
                <td>
                  <strong>Price</strong>
                </td>
                <td>
                  <strong>Quantity</strong>
                </td>
                <td>
                  <strong>Subtotal</strong>
                </td>
              </tr>
            </thead>

            {products.map((pro) => (
              <tbody key={pro._id}>
                <tr>
                  <td>{pro.productName}</td>
                  <td>$ {pro.price}</td>
                  <td>
                    <select
                      type="text"
                      style={{ marginLeft: "30px" }}
                      name="quantity"
                      onChange={(e) => {
                        products.map((cartItem) => {
                          if (cartItem._id === pro._id) {
                            cartItem.quantity = e.target.value;
                            updateProductFromCart(cartItem, user._id, token)
                              .then(window.location.reload())
                              .catch((err) => console.log(err));
                          }
                        });
                      }}
                      defaultValue={pro.quantity}
                    >
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                    </select>
                  </td>
                  <td>$ {pro.price * pro.quantity}</td>
                  <td>
                    <button
                      className="remove"
                      onClick={() => {
                        deleteProductFromCart(pro, user._id, token)
                          .then(window.location.reload())
                          .catch((err) => console.log(err));
                      }}
                    >
                      remove
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>

          {/* <div>
            <label>Coupon Code</label>
            <input type="text" name="coupon" />
            <button>Apply</button>
            <button>Update</button>
          </div> */}
        </div>
        <div className="right">
          <h3>Summary</h3>
          <p>Total Products : {products.length}</p>
          <p>Grand Total : $ {grandTotal}</p>
          <StripeCheckout
            stripeKey="pk_test_51HDOecLemGPkteohNzNxgnxc3AhQvWvRWL4k44xKPv84cNnLnz71meBL6NsKifP4CS6FGyMOGn7yPkVWoDUlOtIj00FT2AiPiy"
            token={makePayment}
            name="Order your food"
            amount={grandTotal*100}
            shippingAddress
            billingAddress
          >
            <button className="pay">PAY</button>
          </StripeCheckout>
        </div>
      </div>
    </Base>
  );
}

export default Cart;
