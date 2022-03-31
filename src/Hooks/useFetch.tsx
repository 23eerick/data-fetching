import axios from 'axios';
import { useState, useEffect } from "react";

//Hook direcionado para qualquer chamada API.
export function useFecth<T = unknown>(url: string) {
    const [data, setData] = useState<T | null>(null)
    const [isFetching, setIsFetching] = useState(true); //teste no finally.

    useEffect(() => {
        axios.get(url)
            .then(Response => {
                setData(Response.data);
            })
            .finally(() => {
                setIsFetching(false)
            })
    }, [])


    return { data, isFetching }
}


