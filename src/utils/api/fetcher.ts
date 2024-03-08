// here, baseUrl contains the value stored in the environment variables, since i'm using VITE, it starts with VITE_
const baseUrl = `${import.meta.env.VITE_API_URL}:${import.meta.env.VITE_API_PORT}`

// basic fetch used as the base for the requests below
// const fetcher = (url:string) => fetch(`${baseUrl}${url}`).then((response) => response.json())
const baseFetch = async (url: string, options?: RequestInit) => {

}

// get request (that use fetcher above)
export const get = (url: string) => baseFetch(url)



export default fetcher