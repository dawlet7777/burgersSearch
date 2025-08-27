import React from 'react'
import { getBurgers } from './burger.service'
import { useQuery } from '@tanstack/react-query'

export const QueryMore = () => {
    const { data, isLoading ,refetch} = useQuery({
        queryKey: ['burgers'],
        queryFn:()=> getBurgers(),
    }
    )
    return { data, isLoading,refetch }
}
