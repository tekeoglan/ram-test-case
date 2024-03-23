import { MessageModal } from "../components/modal";
import { Header } from "../components";
import { PaginatedList, WideCard } from "../components/list";
import { useFetch } from '../hooks';
import { useCallback, useEffect, useState } from 'react';
import { Filter, FindModal } from "../components/modal/FindModal";

const Page = () => {
  const { fetchData, fetchNextPage, data, status, error } = useFetch()
  const [episodes, setEpisodes] = useState<Array<any>>([])
  const [showErr, setShowErr] = useState(false)
  const [showFind, setShowFind] = useState(false)
  const [filtering, setFiltering] = useState(false)
  const [emptyBuff, setEmptyBuff] = useState(false)

  useEffect(() => {
    if (status == 'initial') {
      fetchData('/episode')
    }
  }, [])

  useEffect(() => {
    if (status == 'error') {
      setShowErr(true)
      return
    }

    if (filtering) {
      return
    }

    if (data && data.results) {
      setEpisodes([...episodes, ...data.results])
    }
  }, [data, filtering])

  useEffect(() => {
    if (!filtering) {
      return
    }

    if (!data || !data.results) {

      setShowFind(false)
      setFiltering(false)
      return
    }

    let firstTen = data.results.slice(0, 10)
    console.log("firstTen:", firstTen)

    let newArr: Array<string> = []
    for (const item of firstTen) {
      newArr.push(...item.episode)
    }
    let distinct = [...new Set(newArr)]
    console.log("distinct:", distinct)

    let ids: Array<string> = []
    for (let item of distinct) {
      if (item) {
        let id = item.match(/\d+$/)
        if (id) {
          ids.push(id[0])
        }
      }
    }
    console.log("ids:", ids)

    fetchData(`/episode/${ids}`)
    if (data && data.results) {
      setEmptyBuff(true)
      setEpisodes(data.results)
    }

    setShowFind(false)
    setFiltering(false)

  }, [data, filtering])

  const findHandler = useCallback((filter: Filter) => {
    setFiltering(true)

    let query = `/character?name=${filter.name}&status=${filter.status}&species=${filter.species}&type=${filter.type}&gender=${filter.gender}`

    fetchData(query)
  }, [])

  return (
    <>
      <Header onSearch={() => setShowFind(true)} onHome={() => console.log('home')} />
      <PaginatedList
        header="Episodes"
        shape={WideCard}
        data={episodes}
        pageSize={10}
        isLoading={status == 'loading'}
        loadMore={fetchNextPage}
        resetBuff={emptyBuff}
        onEmtptyBuff={() => setEmptyBuff(false)}
      />
      <MessageModal message={error.message} visible={showErr} onClose={() => setShowErr(false)} />
      <FindModal visible={showFind} onClose={() => setShowFind(false)} onFind={findHandler} />
    </>
  );
}

export default Page
