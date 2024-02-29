import React from 'react';
import axios from 'axios';
import { useMutation } from "@tanstack/react-query";

interface CartProps {
  cartProducts: any[]; 
  onRemoveProduct: (productId: number) => void;
}

const CartTable: React.FC<CartProps> = ({ cartProducts, onRemoveProduct }) => {
  const calculateTotal = (quantity: number, price: number) => {
    return quantity * price;
  };

  const subtotal = cartProducts.reduce((acc, product) => acc + calculateTotal(product.quantity, product.price), 0);
  
  const grandTotal = subtotal ;

  const checkoutApi=useMutation({
    mutationKey:["CHECKOUT_API"],
    mutationFn(payload){
        return axios.post("http://localhost:8082/order/saveAll",payload,{
            headers:{
                "authorization":"Bearer "+localStorage.getItem("accessToken")
            }
        })
    }
})

  const handleCheckout = () => {
    const date = new Date();
    const payload = cartProducts.map((product) => ({
      userId: localStorage.getItem('userId'),
      productId: product?.product?.id,
      deliveryStatus: 'pending',
      deliveryTime: date.getTime(),
      deliveryDate: `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`,
      quantity: product?.quantity,
      price: product?.price,
    }));

    checkoutApi.mutate(payload, {
      onSuccess: (res) => {
        console.log(res);
        window.location.href = '/HomeProduct';


        localStorage.removeItem('cart');
      },

     
      onError: (err) => {
        console.log(err);
      },
    });
  };

  

  return (
    <div className={"w-10/12"}>
      <table className={"mt-4 w-full text-center rounded-xl"}>
        <thead className={"h-10 text-white bg-black rounded-xl gilroy-semibold"}>
          <tr>
            <th className={"px-3"}>Product</th>
            <th className={"px-10"}>Quantity</th>
            <th className={"px-10"}>Price</th>
            <th className={"px-6"}>Total</th>
            <th className={""}>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartProducts.map((product) => (
            <tr key={product.id}>
              <td><h1 className={"flex justify-center mt-1"}>
              <img
                  src={`data:image/jpeg;base64,${product.productImage}`}
                  alt={product.productImage}
                  width="50"
                /></h1>
              </td>
              <td>{product.quantity}</td>
              <td>{product.price}</td>
              <td>{calculateTotal(product.quantity, product.price)}</td>
              <td className={"flex justify-center mt-1"}><button
                  className={"h-[2.3rem] w-20 rounded-xl flex justify-center items-center bg-gray-500 text-black"}
                  onClick={() => onRemoveProduct(product.id)}>Remove</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={'mt-4 w-10/12 flex justify-between absolute bottom-24'}>
        <div className={"font-bold"}>
          <p>Subtotal: Rs {subtotal}</p>
          <p>Grand Total: Rs {grandTotal}</p>
        </div>
        <button className={"rounded-xl w-28 bg-gray-600 text-black h-12"}
                onClick={handleCheckout}>Check Out
        </button>
      </div>
    </div>
  );
};

export default CartTable;
