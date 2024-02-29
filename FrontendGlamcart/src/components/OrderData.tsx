import React from "react";
import {MdDelete} from "react-icons/md";
import {useMutation, useQuery} from "@tanstack/react-query";
import axios from "axios";
import {useNavigate} from "react-router-dom";

interface OrderDataProps {
  search: string;
}

const OrderData: React.FC<OrderDataProps> = ({ search}) => {

  const navigate = useNavigate();

  // Fetching data from API
  const{data,refetch} = useQuery({
      queryKey:["GETDATA"],
      queryFn(){
          return axios.get("http://localhost:8082/order/getAll",{
              headers:{authorization:"Bearer "+localStorage.getItem("accessToken")}
          
      }).catch(error => console.error("Error fetching data:", error));
  }
  })
  console.log("Data:", data);
  
  // Searching data
  const filteredData = data?.data.filter((order: any) =>
      order.product?.productName.toLowerCase().includes(search.toLowerCase())
  );
  console.log("Filtered Data:", filteredData);



  //Deleting data
  const deleteByIdApi=useMutation(
      {
          mutationKey:["DELETE_BY_ID"],
          mutationFn(id:number){
              return axios.delete("http://localhost:8082/order/deleteById/"+id,{
                  headers:{authorization:"Bearer "+localStorage.getItem("accessToken")}
          });
          },onSuccess(){refetch()}
      }
  )

 
  return (
    <>
        {
            filteredData?.map((i?:any) =>{
                return(
                    <tr key={i?.id}>
                        <td>{i?.id}</td>
                        <td>{i?.deliveryDate}</td>
                        <td>{i?.deliveryTime}</td>
                        <td>{i?.deliveryStatus}</td>
                        <td>{i?.product?.price}</td>
                        <td>{i?.product?.quantityInStock}</td>
                       
                        <td>{i?.product?.productName}</td>
                    
                        <td>{i?.user?.email}</td>
                        
                        <td><button
                            className={"w-10 h-8 rounded-xl flex justify-center items-center bg-gray-300 text-lg"}
                            onClick={() => {
                            // Display confirmation prompt before deletion
                            if (window.confirm("Are you sure you want to delete this order?")) {
                                deleteByIdApi.mutate(i?.id);
                            }
                        }}><MdDelete /></button></td>
                    </tr>
                )
            })
        }
    </>
)
}


export default OrderData;
