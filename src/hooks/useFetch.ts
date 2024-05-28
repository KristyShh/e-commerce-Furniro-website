import axios from "axios"
import { useCallback, useEffect, useState } from "react"



export const useFetch = <T>(url: string) => {

const [response, setResponse] = useState<T[]>([])
 const [loading, setLoading] = useState<boolean>(false)
 const [error, setError] = useState<unknown>(null)

 const fetchData = useCallback( async () => {
  try {
   setLoading(true)
   const response = await axios.get(url)
   setResponse(response.data)
   
  } catch (error) {
   setError(error)
  }
  setLoading(false)

 
 },[url])
 
 useEffect(() => {
  fetchData()
 }, [fetchData])

 return {
		response,
		error,
		loading,
        
	}
}