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
      <section className="menu-card--cointainer">
        {menuData && menuData.length > 0 ? (
          menuData.map((curElem) => (
            <div className="menu-card-container" key={curElem?.id}>
              <div className="menu-card">
                <div className="menu-card-body">
                  <span className="menu-card-author subtle">
                    {curElem?.category?.name}
                  </span>
                  <img
                    src={"data:image/jpeg;base64," + curElem?.productImage}
                    alt={curElem?.itemName}
                    className="menu-card-media"
                    width={"200px"}
                    height={"200px"}
                  />
                  <h2 className="menu-card-title">{curElem?.productName}</h2>
                  <h2 className="menu-card-title">
                    Quantity in Stock: {curElem?.quantityInStock}
                  </h2>
                  {/* <p>{curElem?.description}</p> */}
                  <div className={"price-addtocart-div"}>
                    <h4 className="menu-card-price subtle">
                      Rs. {curElem?.price}
                    </h4>
                    <div className="quantity-controls">
                      <button
                        onClick={() => handleDecrement(curElem?.id)}
                        className="quantity-btn"
                      >
                        -
                      </button>
                      <span className="quantity">{cartQuantity[curElem?.id] || 0}</span>
                      <button
                        onClick={() => handleIncrement(curElem?.id)}
                        className="quantity-btn"
                      >
                        +
                      </button>
                    </div> 
               <div className="w-20 h-10">
               <button onClick={() => handleAddToCart(curElem)} className="add-to-card-btn subtle">
                      Add to Cart
                    </button>
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


