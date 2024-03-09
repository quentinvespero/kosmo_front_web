// here, baseUrl contains the value stored in the environment variables, since i'm using VITE, it starts with VITE_
const baseUrl = `${import.meta.env.VITE_API_URL}:${import.meta.env.VITE_API_PORT}`

// fetch function used as the base for the requests below
const baseFetch = async (url: string, options?: RequestInit) => {
    
    // here we are fetching the backend with the endpoint (baseUrl + url parameter) and wait for its response that we'll assign to responseFromBackend
    const responseFromBackend = await fetch(`${baseUrl}${url}`, options)
    
    const data = await responseFromBackend.json()

    if (!responseFromBackend.ok) {
        throw new Error(data.message || 'it seems like an error occured while fetching the datas...')
    }
    return data
}

// get request (that use fetcher above)
export const get = (url: string) => baseFetch(url)

// higher-order function to handle the different type when sending datas
const sendWithData = (method: 'POST' | 'PUT' | 'PATCH') => (url: string, data: any) => baseFetch(url, {
    method,
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
})

// requests with data
export const post = sendWithData('POST')
export const put = sendWithData('PUT')
export const patch = sendWithData('PATCH')

// delete request
export const del = (url:string) => baseFetch(url, { method: 'DELETE'})