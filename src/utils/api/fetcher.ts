// here, baseUrl contains the value stored in the environment variables, since i'm using VITE, it starts with VITE_
const baseUrl = `${import.meta.env.VITE_API_URL}${import.meta.env.VITE_API_PORT}`

// fetch function used as the base for the requests below
// it returns the data in json, so it's what SWR expect, so it can be used later on with SWR
const baseFetch = async (urlEndpoint: string, options?: RequestInit) => {
    try {
        // here we are fetching the backend with the endpoint (baseUrl + urlEndpoint parameter) and wait for its response that we'll assign to responseFromBackend
        const responseFromBackend = await fetch(`${baseUrl}${urlEndpoint}`, options)
        
        // when we receive the data in responseFromBackend, we parse it into json format
        const dataReceived = await responseFromBackend.json()
    
        if (!responseFromBackend.ok) {
            throw new Error(dataReceived.message || 'it seems like an error occured while fetching the datas...')
        }
        // console.log('-----fetcher.ts-----',`url:"${baseUrl}${urlEndpoint}"`)
        return dataReceived
    }
    catch (error) {
        console.error(
            '-----fetcher.ts-----',
            `url:"${baseUrl}${urlEndpoint}"`, 
            'Fetch error:', error
        )
        throw new Error('Network error or API is down')
    }
}

// HOF to handle the different methods when sending datas 
// 1 - sendWithData take a parameter POST, PUT or PATCH
    // 1a - when it receive a parameter, it returns a function.
// 2 - the returned function takes 2 parameters, the urlEndpoint, which is the given endpoint, and dataToSend, which is the data that we'll send to the backend
// This function is the one that we'll gonna give parameters to when using post(), put() or patch() outside of here in components
    // 2a this function execute the function baseFetch and give it the previously given parameters, 
const sendWithData = (method: 'POST' | 'PUT' | 'PATCH') => (urlEndpoint: string, dataToSend: any) => baseFetch(urlEndpoint, {
    method,
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(dataToSend)
})

// get request (that use fetcher above)
export const get = (urlEndpoint: string) => baseFetch(urlEndpoint)

// requests with data
export const post = sendWithData('POST')
export const put = sendWithData('PUT')
export const patch = sendWithData('PATCH')

// delete request
export const del = (urlEndpoint:string) => baseFetch(urlEndpoint, { method: 'DELETE'})