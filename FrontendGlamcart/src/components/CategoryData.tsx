import {CiEdit} from "react-icons/ci";
import {MdDelete} from "react-icons/md";
import {useQuery, useMutation} from "@tanstack/react-query";
import axios from "axios";
import {useNavigate} from "react-router-dom";

interface CategoryDataProps {
    search: string;
}

const CategoryData: React.FC<CategoryDataProps> = ({ search}) => {

    const navigate = useNavigate();

    
    const{data,refetch} = useQuery({
        queryKey:["GETDATA"],
        queryFn(){
            return axios.get("http://localhost:8082/category/findAll",{
                headers:{authorization:"Bearer "+localStorage.getItem("accessToken")}
            
        })
    }
    })
   

    
    const filteredData = data?.data.filter((category:any) =>
        category.name?.toLowerCase().includes(search.toLowerCase())
    );

   
    const deleteByIdApi=useMutation(
        {
            mutationKey:["DELETE_BY_ID"],
            mutationFn(id:number){
                return axios.delete("http://localhost:8082/category/delete/"+id,{
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
                        <tr key={i?.id} className="
                    ">
                            <td>{i?.id}</td>
                            <td>{i?.name}</td>
                            <td className={"flex mt-1 gap-2 justify-center"}>
                                <button
                                    className={"w-12 h-8 rounded-xl flex justify-center items-center bg-gray-300 text-lg"}
                                    onClick={()=>{
                                navigate("/EditCategory/"+i?.id);
                                console.log(i?.id)
                            }}><CiEdit /></button></td>
                            <td><h1 className={"flex justify-center"}>
                                <button
                                className={"w-12 h-8 rounded-xl flex justify-center items-center bg-gray-300 text-lg"}
                                onClick={() => {
                                
                                if (window.confirm("Are you sure you want to delete this category?")) {
                                    
                                    deleteByIdApi.mutate(i?.id);
                                    
                                    
                                }
                            }}><MdDelete /></button></h1></td>
                        </tr>
                    )
                })
            }
        </>
    )
}

export default CategoryData;
