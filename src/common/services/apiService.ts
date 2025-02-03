const apiBaseUrl = import.meta.env.VITE_API_BASE_URL
 
type RequestParam = {
  endpoint: string
}

class ApiService {

  get = async ({ endpoint } : RequestParam ) => {
    const response = await fetch(`${apiBaseUrl}/api/${endpoint}`)
    return await response.json()
  }
}
export const apiService = new ApiService()
