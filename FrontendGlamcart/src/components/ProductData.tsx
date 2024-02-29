import React from "react";
import {CiEdit} from "react-icons/ci";
import {MdDelete} from "react-icons/md";
import { useQuery, useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface ProductDataProps {
  search: string;
}

const ProductData: React.FC<ProductDataProps> = ({ search }) => {
  const navigate = useNavigate();

  
  const { data, refetch } = useQuery({
    queryKey: ["GETDATA"],
    queryFn() {
      return axios.get("http://localhost:8082/product/findAll",
      {
        headers:{authorization:"Bearer "+localStorage.getItem("accessToken")}
     } );
    },
  });

  
  const filteredData = data?.data.filter((product: any) =>
    product.productName?.toLowerCase().includes(search.toLowerCase())
  );

  
  const deleteByIdApi = useMutation({
    mutationKey: ["DELETE_BY_ID"],
    mutationFn: async (id: number) => {
      try {
        const response = await axios.delete(`http://localhost:8082/product/delete/`+id,{
          headers:{authorization:"Bearer "+localStorage.getItem("accessToken")}});
        if (response.status === 200) {
          console.log("Product deleted successfully");
          refetch();
        }
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    },
  });
 
  return (
    <>
      {filteredData?.map((product?: any) => (
        <tr key={product?.id}>
          <td className={"pl-3"}>{product?.id}</td>
          <td>{product?.category?.name}</td>
          <td>{product?.productName}</td>
          <td><h1 className={"flex justify-center mt-1 h-6"}>
            <img src={`data:image/jpeg;base64,${product?.productImage}`} width="45px"  alt={product?.productName}/>
            </h1>
          </td>
          <td>{product?.price}</td>
          <td>{product?.quantityInStock}</td>
          <td>{product?.description}</td>
          <td className={"flex mt-1 gap-2 justify-center"}>
            <button
              className={"w-10 h-8 rounded-xl flex justify-center items-center bg-gray-300 text-lg"}
              onClick={() => {
                navigate(`/edit/${product?.id}`);
              }}
            >
              <CiEdit />
            </button>
            <button
                className={"w-10 h-8 rounded-xl flex justify-center items-center bg-gray-300 text-lg"}
              onClick={() => {
               
                if (window.confirm("Are you sure you want to delete this product?")) {
                  deleteByIdApi.mutate(product?.id);
                }
              }}
            >
              <MdDelete />
            </button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default ProductData;
