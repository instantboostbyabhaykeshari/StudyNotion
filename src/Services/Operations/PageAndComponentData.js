import toast from 'react-hot-toast'
import { apiConnector } from '../apiConnector';
import {catalogData} from "../apis"

export const getCatalogPageData = async(categoryId) => {
    const toastId = toast.loading("loading...");
    let result = [];
    try{
        const response = await apiConnector("POST", catalogData.CATALOGPAGEDATA_API, {
            categoryId: categoryId,
        });

        if(!response?.data?.success){
            throw new Error("Could not fetch category page details.");
        }
        result = response?.data;
    }catch(err){
        console.log(err);
        console.log("Catalog Page data api error");
        toast.error(err.message);
    }
    toast.dismiss(toastId);
    return result;
}
