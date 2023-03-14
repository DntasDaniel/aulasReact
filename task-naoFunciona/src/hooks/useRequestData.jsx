import { useEffect, useState } from "react";

export function useRequestData(parametros, initialState){
    const { method, path, param } = parametros
    const [data, setData] = useState(initialState)
    const [error, setError] = useState('') 
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        instanceAxios[method](path, param)
        .then((resposta) => setData(resposta))
        .catch((error) => setError(error))
        .finally(()=> setLoading(false))

    }, [])

    return [data, error, loading]
}