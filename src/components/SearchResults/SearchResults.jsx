import { useEffect, useState } from 'react'

function SearchResults ({ searchInput, result, setResultId, resultId }) {
  const [id, setId] = useState('')

  function handleClickSearch (e) {
    setId(e.target.id)
    console.log(id)
  }

  useEffect(() => {
    setResultId(id)
    console.log(resultId)
  }, [id, searchInput])

  return (
    <div className='tw-w-100 tw-bg-white tw-flex tw-flex-col tw-shadow-md tw-rounded-xl tw-mt-4 tw-max-h-[300px] tw-overflow-y-scroll'>
      {
        result.map((result) => {
          return (
            <div
              key={result.id}
              id={result.id}
              className='tw-px-[10px] tw-py-5 hover:tw-bg-violet-500/[0.25] tw-font-sans tw-cursor-pointer'
              onClick={handleClickSearch}
            >
              {result.product_name}
            </div>
          )
        })
      }
    </div>
  )
}

export default SearchResults
