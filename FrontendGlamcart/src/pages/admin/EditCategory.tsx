import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import AdminSidebar from "../../pages/admin/AdminSidebar";


const EditCategory: React.FC = () => {

    const navigate = useNavigate();

    const useApiCall = useMutation({
        mutationKey: ["POST_CATEGORY_DATA"],
        mutationFn: (payload) => {
            console.log(payload)
            return axios.post("http://localhost:8082/category/save", 
            
            payload,{
                headers:{authorization:"Bearer "+localStorage.getItem("accessToken")}
        })
        }, onSuccess: () => {
            reset();
            navigate('/ManageCategory')
        }
    })

    const onSubmit = (value: any) => {
        useApiCall.mutate(value)
    }

    //To update Genre
    const { pk_id } = useParams();

    const { data: getByIdApi } = useQuery({
        queryKey: ["GET_BY_ID_CATEGORY"],
        queryFn() {
            return axios.get("http://localhost:8082/category/findById/" + pk_id,
            {
                headers:{authorization:"Bearer "+localStorage.getItem("accessToken")}
            
        })
        }, enabled: !!pk_id
    })

    console.log(getByIdApi?.data);
    

    // Sending data to backend
    const { register,
        handleSubmit,
        formState,
        reset } = useForm({ values: getByIdApi?.data });

    const location = useLocation();
    const currentLocation = location.pathname;

    return (
        <div className="flex gap-10 " >
            <AdminSidebar activePage={currentLocation} />
            
            <div className=" flex flex-col w-5/12 h-64 shadow-xl bg-slate-50 transform rounded-2xl px-20 ">
            
                    <form method="dialog"onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col items-center gap-6">
                        <h3 className="font-bold text-2xl pt-10">Edit Category</h3>

                            <input type={"text"} placeholder={"Enter Genre Name"} className={"w-full outline-none appearance-none p-2 rounded"} {...register("name", { required: "Genre Name is required!!" })} />

                        {/*<h6 className={"text-xs pl-2 text-gray-500"}>{errors?.genre?.message}</h6>*/}

                        <button type={"submit"} className=" w-28 h-16 bg-pink-200"><a>Edit</a></button>
                    </form>
                </div>
            </div>
    )
}

export default EditCategory;