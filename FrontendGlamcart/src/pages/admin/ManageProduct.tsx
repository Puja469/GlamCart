
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
          toast.error(`Error: $`);
        }
      },
    });
  
    const onSubmit = (formData: any) => {
        const formDataWithFile = new FormData();
        // formDataWithFile.append("id", formData.id);
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

                <div className={"product-right h-auto "}>
                    <header className={"product-header"}>
                        <h1>Manage Product</h1>

                        <div className={"search-wrapper3"}>
                            <span><FaSearch /></span>
                            <input type={"search"} placeholder={"Search Product"} value={search} onChange={(e)=> setSearch(e.target.value)}/>
                        </div>
                    </header>

                    <div className={"product-main-content "}>
                        <div className={"c-main-content pb-10"}>
                            <div className={"float-right mb-4 -mt-4"}>
                                <button className={"rounded-xl h-12 w-36 bg-gray-800 flex text-white justify-center items-center"} type={"button"} onClick={toggleCatgModal}><span><IoIosAddCircle style={{fontSize:"1.2rem",marginRight:"2px"}}/></span>Add Product</button>
                            </div>
                            <div className={"ml-10  table-container3"}>
                                <table className={"mt-8 w-full text-sm rounded-xl"}>
                                    <thead className={"h-10 text-white text-center bg-black rounded-xl"}>
                                        <tr>
                                            <th className={"pl-3"}>ID</th>
                                            <th className={"px-5"}>Category</th>
                                            <th className={"px-10"}>productName</th>
                                            <th className={"px-2"}>productImage</th>
                                            <th className={"px-6"}>Price</th>
                                            <th className={"px-4"}>Quantity</th>
                                            <th >Description</th>
                                            <th className={"px-8"}>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className={"w-full"}>
                                        <ProductData search={search}/>
                                        </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>
            </div>



            {modal1 && (
                <div className="add-product-modal" >
                    <div onClick={toggleCatgModal} className="add-product-overlay"></div>
                    <div className="add-product-modal-content">
                        <form onSubmit={handleSubmit(onSubmit)} className={"text-black"}>
                            <h2>Add Product</h2>
                            <button className="close-add-product-btn"  onClick={() => {
                                toggleCatgModal();
                                reset(); 
                            }}>
                                <FaRegWindowClose />
                            </button>

                            <div className={"category-id-number1"}>
                                <label>CategoryID</label>
                                <input
                                   type={"number"}
                                   className={"ml-2 bg-transparent border border-gray-800 rounded"}
                                    placeholder={"Enter category ID"}
                                     {...register("categoryId", { required: "Category ID is required!!" })} />
                                     <h6 style={{ paddingLeft: "3px" }}></h6>
                                     
                            </div>
                            <div className={"w-full h-12 border-solid border rounded-xl border-gray-800 mt-5 flex items-center pl-3 pr-2"}>
                                <input type={"text"} placeholder={"Enter Product Name"} className={"w-full  outline-none appearance-none bg-transparent"} {...register("productName",{required:"Product name is required"})}/>
                            </div>
                            <div className={"flex justify-between mt-5"}>
                                <div className={"w-5/12 h-12 border-solid border rounded-xl border-gray-800 flex items-center pl-3 pr-2 mr-1"}>
                                    <input type={"text"} placeholder={"Enter Description"} className={"w-full outline-none appearance-none bg-transparent"} {...register("description",{required:"Description name is required"})}/>
                                </div>
                                <div className={"w-7/12 h-12 border-solid border rounded-xl border-gray-800 flex items-center pl-3 pr-2"}>
                                    <input type={"text"} placeholder={"Enter price"} className={"w-full outline-none appearance-none bg-transparent"} {...register("price",{required:"price is required"})}/>
                                </div>
                            </div>
                            <div className={"w-7/12 justify-between items-center pl-1"}>
                                    <h1 className={"text-lg pl-1"}>Select Image: </h1>
                                    <div className={"w-full h-12 justify-between border-solid border rounded-xl border-gray-800 flex items-center pl-1"}>
                                        <input type={"file"} className={"text-gray-400"} {...register("productImage")}/>
                                    </div>
                                </div>
                           
                            <div className="product-quantity" style={{ marginTop: '20px' }}>
                                <label>QuantityInStock</label>
                                <input type={"number"} className={"ml-2 bg-transparent border border-gray-800 rounded"}  placeholder={"Enter product Quantity"} {...register("quantityInStock",{required:"product Quantity is required!!"})}/>
                                <h6 style={{ paddingLeft: "5px"  }}></h6>
                               
                            </div>
                           
                            <div className={"product-name-add-btn w-full"}>
                                <button className={"w-20 h-12 bg-gray-700 text-black rounded-xl"} type={"submit"}>Add</button>
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

