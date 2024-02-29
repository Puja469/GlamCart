import React, { useEffect, useState } from 'react';
  
import DefaultLayout from '../../components/layouts/default-layout';
import axios from 'axios';
import CartTable from './CartTable';


const Cart: React.FC = () => {
  const [cartProducts, setCartProducts] = useState<any[]>([]);
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    const fetchCartProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8082/cart/getAll', {
          params: {
            userId: userId,
          }, 
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        });
        setCartProducts(response.data);
      } catch (error) {
        console.error('Error fetching cart products:', error);
      }
    };

    fetchCartProducts();
  }, [userId]);


  const handleRemoveProduct = async (id: number) => {
    try {
      
      await axios.delete(`http://localhost:8082/cart/deleteById/${id}` , {
        params: {
          userId: userId,
        },
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });
      
      setCartProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));

      // Update localStorage after removing the item
      const updatedCart = cartProducts.filter((product) => product.id !== id);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    } catch (error) {
      console.error('Error removing product from cart:', error);
    }
  };

  return (
    <DefaultLayout>
      <div className={"px-6 py-2 flex flex-col items-center"}>
        <h2 className={"font-bold text-lg"}>Your Cart</h2>
        <CartTable cartProducts={cartProducts} onRemoveProduct={handleRemoveProduct} />
      </div>
    </DefaultLayout>
  );
};

export default Cart;
