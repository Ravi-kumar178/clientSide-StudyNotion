import toast from "react-hot-toast"
import {apiConnector} from "../apiConnector"
import { catalogPageApi } from "../api";

const {CATALOG_PAGEDATA_API} = catalogPageApi


export const CategoryPageDetails = async({categoryId}) => {
  let toastId = toast.loading("Loading...");
  let result = []
  try{
    const response = await apiConnector("POST",CATALOG_PAGEDATA_API,{categoryId:categoryId});

    if(!response?.data?.success){
        throw new Error("could not fetch category page data");
    }
    const result = response?.data;
  }
  catch(err){
    console.log("CATALOG PAGE DATA API ERROR:.... ",err);
    toast.error(err.message);
    result = err?.response?.data;
  }
  toast.dismiss(toastId);
  return result;
}
