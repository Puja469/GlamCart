
import {MdDelete} from "react-icons/md";
import {useQuery, useMutation} from "@tanstack/react-query";
import axios from "axios";
import {useNavigate} from "react-router-dom";

interface CustomerDataProps {
    search: string;
}

const CustomerData: React.FC<CustomerDataProps> = ({ search}) => {

    const navigate = useNavigate();

    // Fetching data from API
    const{data,refetch} = useQuery({
        queryKey:["GETDATA"],
        queryFn(){
            return axios.get("http://localhost:8082/user/getAll",{
                headers:{authorization:"Bearer "+localStorage.getItem("accessToken")}
            
        })
    }
    })
   

    //Searching data
    const filteredData = data?.data.filter((customer:any) =>
       customer.fullName?.toLowerCase().includes(search.toLowerCase())
    );

    //Deleting data
    const deleteByIdApi=useMutation(
        {
            mutationKey:["DELETE_BY_ID"],
            mutationFn(id:number){
                return axios.delete("http://localhost:8082/user/deleteById/"+id,{
                    headers:{authorization:"Bearer "+localStorage.getItem("accessToken")}
            });
            },onSuccess(){refetch()}
        }
    )

    return (
        <>
            {
                filteredData?.map((customer:any) =>{
                    return(
                        <tr key={customer?.id}>
                            <td>{customer?.id}</td>
                            <td>{customer?.fullName}</td>
                           
                            
                            <td>{customer?.email}</td>
                            
                            <td><h1 className={"flex justify-center"}><button
                                className={"w-10 h-8 rounded-xl flex justify-center items-center bg-gray-300 text-lg"}
                                onClick={() => {
                                // Display confirmation prompt before deletion
                                if (window.confirm("Are you sure you want to delete this user?")) {
                                    deleteByIdApi.mutate(customer?.id);
                                }
                            }}><MdDelete /></button></h1></td>
                        </tr>
                    )
                })
            }
        </>
    )
}

export default CustomerData;
