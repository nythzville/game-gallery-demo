import axios from 'axios';
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL
 
type RequestParam = {
  endpoint: string
  data?: any
}

class ApiService {
  
  get = async ({ endpoint } : RequestParam ) => {

    const response = await fetch(`${apiBaseUrl}/${endpoint}`)
    return await response.json()
    // return axios.get(`${apiBaseUrl}/${endpoint}`)
    //   .then(function (response) {
    //     // handle success
    //     return response.data
    //   })
    //   .catch(function (error) {
    //     // handle error
    //     console.log(error);
    //   })
  }
  
  post = async ({ endpoint, data } : RequestParam) => {
    return axios.post(`${apiBaseUrl}/${endpoint}`, data)
      .then(function (response) {
        // handle success
        return response
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }  
}
export const apiService = new ApiService()
