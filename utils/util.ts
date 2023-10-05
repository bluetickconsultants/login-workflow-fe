import { appConstants } from "./constants"

export const isUserAuthenticated = () =>{
    let isAuthenticated = false
    if (typeof window !== 'undefined') {
        isAuthenticated = Boolean(localStorage.getItem(appConstants.token))
    }
    return isAuthenticated

}

export const apiErrorHandler = (error: any) => {
    if (error.response) {
      const { status, data } = error.response;
      if (status === 400) {
        return data.error || 'Bad Request';
      } else if (status === 401) {
        return data.error || 'Unauthorized';
      } else if (status === 403) {
        return data.error || 'Forbidden';
      } else if (status === 404) {
        return data.error || 'Not Found';
      } else if (status === 500) {
        return data.error || 'Internal Server Error';
      } else {
        return 'An error occurred';
      }
    } else if (error.request) {
      return 'No response from the server';
    } else {
      return 'An error occurred';
    }
  };