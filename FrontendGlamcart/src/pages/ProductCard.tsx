import React, { useState } from "react";
import axios from "axios";


interface ProductCardProps {
  menuData: any[];
}

const ProductCard: React.FC<ProductCardProps> = ({ menuData }) => {
  const [cartQuantity, setCartQuantity] = useState<{ [key: string]: number }>({});
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);


  const handleIncrement = (productId: string) => {
    setCartQuantity((prevQuantity) => ({
      ...prevQuantity,
      [productId]: (prevQuantity[productId] || 0) + 1,
    }));
  };

  const handleDecrement = (productId: string) => {
    setCartQuantity((prevQuantity) => ({
      ...prevQuantity,
      [productId]: Math.max((prevQuantity[productId] || 0) - 1, 0),
    }));
  };

  const handleAddToCart = async (product: any) => {

    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
    const updatedCart = [...existingCart, product];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    try {
      const response = await axios.post(
        "http://localhost:8082/cart/save", 
        {
          productId: product.id,
          quantity: cartQuantity[product.id] || 1,
          price: product.price,
          productImage: product.productImage,
          
          
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("accessToken"),
          },
        }
      );

     
      console.log("Product added to cart:", response.data);
      
      setShowSuccessMessage(true);

      
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    } catch (error) {
      console.error("Error adding product to cart:", error);
      
    }
  };

  return (
    <>
      <section className="menu-card--cointainer w-full flex px-10  flex-wrap md:flex-row flex-col justify-between mt-10">
        {menuData && menuData.length > 0 ? (
          menuData.map((curElem) => (
            <div className="menu-card-container md:w-[22%] bg-slate-50 shadow-2xl rounded-xl mb-18" key={curElem?.id}>
              <div className="menu-card">
                <div className="menu-card-body rounded-2xl px-5 py-6">
                  <span className="menu-card-author pl-2">
                    {curElem?.category?.name}
                  </span>
                  <img src={"data:image/jpeg;base64," + curElem?.productImage} alt={curElem?.itemName} className="w-full h-52 rounded-2xl"/>
                  <h2 className="text-xl mt-2">{curElem?.productName}</h2>
                  <p className="poppins-light pb-2">{curElem?.description}</p>
                  <div className={"price-addtocart-div"}>
                    <h4 className="text-xl">
                      Rs. {curElem?.price}
                    </h4>
                    <div className="quantity-controls mt-2 flex justify-between items-center">
                      <div className="w-6/12 flex justify-between items-center">
                      <button
                        onClick={() => handleDecrement(curElem?.id)}
                        className="w-[35%] h-12 rounded-2xl shadow-sm bg-gray-300 text-3xl">
                        -
                      </button>
                      <span className="quantity text-3xl">{cartQuantity[curElem?.id] || 0}</span>
                      <button
                        onClick={() => handleIncrement(curElem?.id)}
                        className="w-[35%] h-12 rounded-2xl shadow-sm bg-gray-300 text-3xl">
                        +
                      </button>
                      </div>
                      <div className="w-4/12">
                        <button onClick={() => handleAddToCart(curElem)} className="w-full rounded-2xl h-14 bg-pink-100">
                              Add to Cart
                        </button>
                      </div>
                    </div> 
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>No menu products available</div>
        )}
      </section>
      {showSuccessMessage && (
        <div className="success-popup">
          Product added to the cart successfully!
        </div>
      )}
    </>
  );
};

export default ProductCard;


