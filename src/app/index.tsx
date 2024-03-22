import { WideCard } from "../components";
import PaginatedList from "../components/PaginatedList";
import { useFetch } from '../hooks';
import { useEffect, useState } from 'react';

export default function Page() {
  const { fetchData, fetchNextPage, data, status } = useFetch()
  const [episodes, setEpisodes] = useState<Array<any>>([])

  useEffect(() => {
    if (status == 'initial') {
      fetchData('/episode')
    }
  }, [])

  useEffect(() => {
    if (!data || !data.results) return
    setEpisodes([...episodes, ...data.results])
  }, [data])

  return (
    <PaginatedList
      header="Episodes"
      shape={WideCard}
      data={episodes}
      pageSize={10}
      isLoading={status == 'loading'}
      loadMore={fetchNextPage} />
  );
}
