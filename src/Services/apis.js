// const BASE_URL = import.meta.env.VITE_APP_BASE_URL;
const baseUrl = "http://localhost:4000/api/v1"

export const categories = {
  CATEGORIES_API: `${baseUrl}/course/showAllCategories`,
};

export const catalogData = {
  CATALOGPAGEDATA_API: `${baseUrl}/course/getCategoryPageDetails`
}

export const endPoints = {
  SEND_OTP_API: `${baseUrl}/auth/sendotp`,
  SIGN_UP_API: `${baseUrl}/auth/signUp`,
  LOGIN_API: `${baseUrl}/auth/login`
}

export const courses = {
  ALL_COURSES_API: `${baseUrl}/course/getAllCourses`
}
