import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import {Link} from "react-router-dom"


const FeaturedProducts = () =>{

    // Shuffle function to shuffle the array
    function shuffleArray(array:any) {
        for (let i = array?.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Fetching comic item from API
    const { data: productData } = useQuery({
        queryKey: ["GET_COMIC_ITEM"],
        queryFn() {
            return axios.get("http://localhost:8082/product/findAll");
        }
    });

    const shuffledProductData = shuffleArray(productData?.data);     
    const popularItems = shuffledProductData?.slice(0, 6);                

    return(
        <>
            <div className={"md:h-96 h-auto md:p-10 p-6 md:mb-52"}>
                <div className={"pt-6 md:flex justify-between flex-wrap"}>
                    {popularItems?.map((i:any) => {
                        return(
                            <div className={"md:w-[25rem] md:mb-0 mb-8 rounded-xl cursor-pointer shadow-xl hover:shadow-2xl bg-slate-50 hover:bg-gray-100 transform-gpu scale-100 hover:scale-105 transition-transform duration-500"}>
                                <div className={"overflow-hidden rounded-t-xl"}>
                                    <img src={'data:image/jpeg;base64,'+i?.productImage} className={"bg-cover w-full h-[16rem] transform-gpu scale-100 hover:scale-110 transition-transform duration-500"}/>
                                </div>
                                <div className={"px-2 pb-5 hover:bg-pink-100"}>
                                    <h1 className={"gilroy-bold uppercase md:text-sm text-xs mt-1"}>Brand - {i?.category?.name}</h1>
                                    <h1 className={"gilroy-bold md:text-3xl text-xl"}>{i?.productName}</h1>
                                    <h4 className="text-lg poppins-light">Rs. {i?.price}</h4>                                    
                                </div>
                            </div>
                    )})}
                </div>
            </div>
        </>
    )
}

export default FeaturedProducts