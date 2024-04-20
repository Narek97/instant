import { useState, useCallback } from 'react'

type SearchParams = URLSearchParams

interface QueryParamsHook {
  searchParams: SearchParams
  updateQueryParam: (name: string, value: string) => void
  createQueryString: (name: string, value: string) => string
}

const useQueryParams = (): QueryParamsHook => {
  const [searchParams, setSearchParams] = useState<SearchParams>(
    new URLSearchParams()
  )

  const updateQueryParam = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)
      setSearchParams(params)
    },
    [searchParams]
  )

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)
      return params.toString()
    },
    [searchParams]
  )

  return { searchParams, updateQueryParam, createQueryString }
}

export default useQueryParams
