const BASE_URL = "http://localhost:4000/api/v1"

export const categories = {
    CATEGORIES_API: BASE_URL + "/showAllCategories",
}

export const endPoints = {
    LOGIN_API : BASE_URL + "/auth/login",
    SENDOTP_API: BASE_URL+"/auth/sendotp",
    SIGNUP_API: BASE_URL + "/auth/signup",
}