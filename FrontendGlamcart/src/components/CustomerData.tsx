
import {MdDelete} from "react-icons/md";
import {useQuery, useMutation} from "@tanstack/react-query";
import axios from "axios";
import {useNavigate} from "react-router-dom";

interface CustomerDataProps {
    search: string;
}

const CustomerData: React.FC<CustomerDataProps> = ({ search}) => {

    const navigate = useNavigate();

    
    const{data,refetch} = useQuery({
        queryKey:["GETDATA"],
        queryFn(){
            return axios.get("http://localhost:8082/user/getAll",{
                headers:{authorization:"Bearer "+localStorage.getItem("accessToken")}
            
        })
    }
    })
   

   
    const filteredData = data?.data.filter((customer:any) =>
       customer.firstName?.toLowerCase().includes(search.toLowerCase())
    );

    
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
                filteredData?.map((i:any) =>{
                    return(
                        <tr key={i?.id}>
                            <td>{i?.id}</td>
                            <td>{i?.firstName}</td>
                            <td>{i?.lastName}</td>
                            <td>{i?.userName}</td>
                            <td>{i?.email}</td>
                            
                            <td><button className={"delete-btn2"} onClick={() => {
                                
                                
                                if (window.confirm("Are you sure you want to delete this category?")) {
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

export default CustomerData;
