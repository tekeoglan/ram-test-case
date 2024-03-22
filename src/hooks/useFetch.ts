import axios from "../lib/api";
import { useEffect, useState } from "react";

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function useFetch<T>(): { fetchData: (path: string) => void, status: Status, data: T | null, error: Error } {
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<Error>(Error(''))
  const [status, setStatus] = useState<Status>('idle')
  const [relativePath, setRelativePath] = useState<string>('')

  const fetchData = (relativePath: string) => {
    setRelativePath(relativePath)
  }

  useEffect(() => {
    if (!relativePath) return
    setStatus('loading')

    axios.get(relativePath).then((response) => {
      setData(response.data)
      setStatus('success')
    }).catch((error) => {
      setError(error)
      setStatus('error')
    }).finally(() => {
      setStatus('idle')
    })
  }, [relativePath])

  return { fetchData, status, data, error }
}
