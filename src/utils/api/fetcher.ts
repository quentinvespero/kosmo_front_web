// here, baseUrl contains the value stored in the environment variables, since i'm using VITE, it starts with VITE_
const baseUrl = `${import.meta.env.VITE_API_URL}:${import.meta.env.VITE_API_PORT}`

// simple fetch operation that will be used in the requests below
const fetcher = (url:string) => fetch(`${baseUrl}${url}`).then((response) => response.json())

// put
export const get = (url: string) => fetcher(url)

export default fetcher