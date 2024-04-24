import { toast } from "react-hot-toast"

import { setUser } from "../../Slices/profileSlice"
import { apiConnector } from "../apiConnector"
import { settingsEndpoints } from "../api"
import { logout } from "./auth"


const {
  UPDATE_DISPLAY_PICTURE_API,
  UPDATE_PROFILE_API,
  CHANGE_PASSWORD_API,
  DELETE_PROFILE_API,
} = settingsEndpoints

export function updateDisplayPicture(token, formData) {
  
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    try {
      /* console.log(UPDATE_DISPLAY_PICTURE_API); */
      const response = await apiConnector(
        "PUT",
        UPDATE_DISPLAY_PICTURE_API,
        formData,
        {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        }
      )
      console.log(
        "UPDATE_DISPLAY_PICTURE_API API RESPONSE............",
        response
      )

      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      toast.success("Display Picture Updated Successfully");
      console.log("response.data.data: ", response.data.data);
      dispatch(setUser(response.data.data))
    } catch (error) {
      console.log("UPDATE_DISPLAY_PICTURE_API API ERROR............", error)
      toast.error("Could Not Update Display Picture")
    }
    toast.dismiss(toastId)
  }
}

export function updateProfile(token, formData) {

  console.log("formData: ", formData);
  const {firstName, lastName,about,contactNumber,gender,dateOfBirth} = formData;
  console.log("contactNumber: ",contactNumber);

  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    try {
      const response = await apiConnector("PUT", UPDATE_PROFILE_API, formData, { Authorization: `Bearer ${token}`, })
      console.log("UPDATE_PROFILE_API API RESPONSE............", response)

      if(!response.data.success) {
        throw new Error(response.data.message)
      }
      toast.success("Profile Updated Successfully");

      const user = JSON.parse(localStorage.getItem("user"));
      console.log("user in update profile operation: ",user);
      user.firstName = firstName || user.firstName;
      user.lastName = lastName || user.lastName;
      user.additionalDetails.dateOfBirth = dateOfBirth ||user.additionalDetails.dateOfBirth;
      user.additionalDetails.contactNumber = contactNumber || user.additionalDetails.contactNumber;
      user.additionalDetails.gender = gender || user.additionalDetails.gender;
      user.additionalDetails.about = about || user.additionalDetails.about;

      localStorage.setItem("user",JSON.stringify(user));
    } 
    catch (error) {
      console.log("UPDATE_PROFILE_API API ERROR............", error)
      toast.error("Could Not Update Profile")
    }
    toast.dismiss(toastId)
  }
} 

export async function changePassword(token, formData) {
  const toastId = toast.loading("Loading...")
  console.log("token: ",token);
  
  console.log("formData: ",formData);
  const {oldPassword,newPassword,confirmNewPassword} = formData;
  try {
    const response = await apiConnector("POST", CHANGE_PASSWORD_API, {oldPassword,newPassword,confirmNewPassword},
    { Authorization: `Bearer ${token}` }
    )
    console.log("CHANGE_PASSWORD_API API RESPONSE............", response)

    if (!response.data.success) {
      throw new Error(response.data.message)
    }
    toast.success("Password Changed Successfully")
  } catch (error) {
    console.log("CHANGE_PASSWORD_API API ERROR............", error)
    toast.error(error.response.data.message)
  }
  toast.dismiss(toastId)
}

export function deleteProfile(token, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    try {
      const response = await apiConnector("DELETE", DELETE_PROFILE_API, null, {
        Authorization: `Bearer ${token}`,
      })
      console.log("DELETE_PROFILE_API API RESPONSE............", response)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      toast.success("Profile Deleted Successfully")
      dispatch(logout(navigate))
    } catch (error) {
      console.log("DELETE_PROFILE_API API ERROR............", error)
      toast.error("Could Not Delete Profile")
    }
    toast.dismiss(toastId)
  }
}