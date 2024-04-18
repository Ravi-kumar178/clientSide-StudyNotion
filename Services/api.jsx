const BASE_URL = "http://localhost:4000/api/v1"

export const categories = {
    CATEGORIES_API: BASE_URL + "/showAllCategories",
}

export const endPoints = {
    LOGIN_API : BASE_URL + "/auth/login",
    SENDOTP_API: BASE_URL+"/auth/sendotp",
    SIGNUP_API: BASE_URL + "/auth/signup",
    GETPASSWORDTOKEN_API: BASE_URL + "/auth/reset-password-token",
    RESET_PASSWORD_API : BASE_URL + "/auth/reset-password"
}

export const contactEndPoints = {
    CONTACT_API : BASE_URL + "/contact"
}