
import "../../assets/css/admin/ManageProduct.css";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IoIosAddCircle } from "react-icons/io";
import {FaRegWindowClose, FaSearch} from "react-icons/fa";
import gsap from "gsap";
import AdminSidebar from "./AdminSidebar.tsx";
import {useLocation} from "react-router-dom";
import {useForm} from "react-hook-form";
import axios from "axios";
import {useMutation, useQuery} from "@tanstack/react-query";
import ProductData from "../../components/ProductData.tsx";


const ManageProduct: React.FC = () => {
    const [search, setSearch] = useState("");
    const location = useLocation();
    const currentLocation = location.pathname;
    const [modal1, setModal] = useState(false);
  
    const { refetch } = useQuery({
      queryKey: ["GETDATA"],
    });
  
    const useApiCall = useMutation({
      mutationKey: ["POST_PRODUCT_MANAGEPRODUCT"],
      mutationFn: async (formData: FormData) => {
        try {
            
            
          const response = await axios.post(
            "http://localhost:8082/product/save",
            formData,{
                headers:{authorization:"Bearer "+localStorage.getItem("accessToken"),
                'Content-Type': 'multipart/form-data',}
             } );
        
          if (response.status === 200) {
            notify();
            refetch();
            reset();
          }
        } catch (error) {
          console.error("Error adding product:", error);
          toast.error(`Error: ${error.message}`);
        }
      },
    });
  
    const onSubmit = (formData: any) => {
        const formDataWithFile = new FormData();
        formDataWithFile.append("id", formData.id);
        formDataWithFile.append("categoryId", formData.categoryId);
        formDataWithFile.append("productName", formData.productName);
        formDataWithFile.append("productImage", formData.productImage[0]);
        formDataWithFile.append("price", formData.price);
        formDataWithFile.append("quantityInStock", formData.quantityInStock);
        formDataWithFile.append("description", formData.description);
    
        useApiCall.mutate(formDataWithFile);
      };
  
    const { register, handleSubmit, formState, reset } = useForm();
    const { errors } = formState;
  
    const notify = () => {
      toast.success("Product inserted successfully", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    };
  
    useEffect(() => {
      if (modal1) {
        gsap.from(".add-product-modal", {
          y: -50,
          duration: 0.3,
          opacity: 0,
        });
      }
    }, [modal1]);
  
    const toggleCatgModal = () => {
      setModal(!modal1);
    };
  
    return(
        <section>
            <div className={"manage-product-page"}>
                <div className={"product-left"} >
                    <AdminSidebar activePage={currentLocation} />
                </div>

                <div className={"product-right"}>
                    <header className={"product-header"}>
                        <h1>Manage Product</h1>

                        <div className={"search-wrapper3"}>
                            <span><FaSearch /></span>
                            <input type={"search"} placeholder={"Search Product"} value={search} onChange={(e)=> setSearch(e.target.value)}/>
                        </div>

                        <div className={"user-wrapper3"}>
                            <img src={"https://images.pexels.com/photos/14073969/pexels-photo-14073969.jpeg?auto=compress&cs=tinysrgb&w=800"} width={"40px"} height={"40px"} alt={"N"}/>
                            <div>
                                <h4>Admin</h4>
                                <small>Super admin</small>
                            </div>
                        </div>
                    </header>

                    <div className={"product-main-content"}>
                        <div className={"c-main-content"}>
                            <div className={"btn2"}>
                                <button type={"button"} onClick={toggleCatgModal}><span><IoIosAddCircle style={{fontSize:"1.5rem",marginBottom:"-4px"}}/></span>Add Product</button>
                            </div>

                            <div className={"table-container3"}>
                                <div className={"card-header3"}>
                                  
                                </div>
                                <div className={"card-body3"}>
                                    <table className={"table-bordered3"}>
                                        <thead >
                                        <tr className="table-box">
                                            <th className={"id-box3"}>ID</th>
                                            <th className={"name-box3"}>Category ID</th>
                                            <th className={"name-box3"}>ProductName</th>
                                            <th className={"name-box3"}>ProductImage</th>
                                            <th className={"name-box3"}>Price </th>
                                            <th className={"name-box3"}>Quantity </th>
                                            <th className={"name-box3"}>Description </th>
                                            <th className={"edit-box3"}>Edit</th>
                                            <th className={"delete-box3"}>Delete</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <ProductData search={search}/>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>



            {modal1 && (
                <div className="add-product-modal" >
                    <div onClick={toggleCatgModal} className="add-product-overlay"></div>
                    <div className="add-product-modal-content">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h2>Add Product</h2>
                            <button className="close-add-product-btn"  onClick={() => {
                                toggleCatgModal();
                                reset(); 
                            }}>
                                <FaRegWindowClose />
                            </button>

                            <div className={"product-id-number"}>
                                <label>ID</label>
                                <input type={"number"}   placeholder={"Enter ID"}/>
                            </div>
                            <div className={"category-id-number1"}>
                                <label>CategoryID</label>
                                <input
                                   type={"number"}
                                   
                                  
                                    placeholder={"Enter category ID"}
                                     {...register("categoryId", { required: "Category ID is required!!" })} />
                                     <h6 style={{ paddingLeft: "3px" }}>{errors?.categoryId?.message}</h6>
                                     
                            </div>
                            <div className={"product-name"}>
                                <label >Product Name</label>
                                <input type={"text"}  placeholder={"Enter product Name"} {...register("productName",{required:"product Name is required!!"})}/>
                                <h6 style={{paddingLeft:"3px"}}>{errors?.name?.message}</h6>
                            </div>
                            <div className={"product-image"}>
                                <label>Product Image</label>
                                <input type={"file"}   placeholder={"file"} {...register("productImage",{required:"product image is required!!"})}/>
                                <h6 style={{paddingLeft:"6px"}}>{errors?.productImage?.message}</h6>
                            </div>
                            <div className={"product-price"}>
                                <label>Price</label>
                                <input type={"number"}  placeholder={"Enter product Price"} {...register("price",{required:"product price is required!!"})}/>
                                <h6 style={{ paddingLeft: "3px" }}>{errors?.price?.message}</h6>
                               
                            </div>
                            <div className={"product-quantity"}>
                                <label>QuantityInStock</label>
                                <input type={"number"}   placeholder={"Enter product Quantity"} {...register("quantityInStock",{required:"product Quantity is required!!"})}/>
                                <h6 style={{ paddingLeft: "3px" }}>{errors?.quantityInStock?.message}</h6>
                               
                            </div>
                            <div className={"product-discription"}>
                                <label>Discription</label>
                                <input type={"text"}   placeholder={"Enter product discription"} {...register("discription",{required:"product discription is required!!"})}/>
                                <h6 style={{ paddingLeft: "3px" }}>{errors?.description?.message}</h6>
                            </div>
                            <div className={"product-name-add-btn"}>
                                <button type={"submit"}>Add</button>
                            </div>
                        </form>
                    </div>

                    <ToastContainer />
                </div>
            )}
        </section>
    );
};

export default ManageProduct;

