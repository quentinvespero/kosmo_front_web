import useSWR from "swr"
import { DatasInterfaces } from "../../interfaces/datasInterfaces"
import fetcher from "./fetcher"

// getting user informations
export const UserFetches_userInformations = (id:DatasInterfaces['users']) => {
    const {data, error} = useSWR('/user/', fetcher)

    return {
        userdata:data,
        isLoading: !error && !data,
        isError: error
    }
}