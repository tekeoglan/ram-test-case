import axios from "../lib/api";
import { useEffect, useState } from "react";

type Status = 'initial' | 'loading' | 'success' | 'error'

export default function useFetch(): { fetchData: (path: string) => void, hasNext: () => boolean, fetchNextPage: () => void, status: Status, data: any, error: Error } {
  const [data, setData] = useState<any>(null)
  const [error, setError] = useState<Error>(Error(''))
  const [status, setStatus] = useState<Status>('initial')
  const [rPath, setRPath] = useState<string>('')

  useEffect(() => {
    if (!rPath && status == 'loading') return
    setStatus('loading')

    axios.get(rPath).then((response) => {
      setData(response.data)
      setStatus('success')
    }).catch((error) => {
      setError(error)
      setStatus('error')
    })
  }, [rPath])

  const fetchData = (relativePath: string) => {
    setRPath(relativePath)
  }

  const hasNext = () => {
    return data && data.info && data.info.next
  }

  const fetchNextPage = () => {
    if (!hasNext()) return
    setRPath(data.info.next)
  }

  return { fetchData, hasNext, fetchNextPage, status, data, error }
}
