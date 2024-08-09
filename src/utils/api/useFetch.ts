import useSWR from "swr"
import { get } from "./fetcher"

export const useFetchData = (urlEndpoint:string) => {
    const {data, error, isLoading, mutate} = useSWR(urlEndpoint, get, {suspense:true})

    return {data, error, isLoading, mutate}
}