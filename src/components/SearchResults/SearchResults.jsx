import { useEffect } from 'react'

function SearchResults ({ result, setResultId, resultId }) {
  function handleClickSearch (e) {
    setResultId(e.target.id)
  }

  useEffect(() => {}, [resultId])
  return (
    <div className='tw-w-100 tw-bg-white tw-flex tw-flex-col tw-shadow-md tw-rounded-xl tw-mt-4 tw-max-h-[300px] tw-overflow-y-scroll'>
      {
        result.map((result) => {
          return (
            <div
              key={result.id}
              id={result.id}
              className='tw-px-[10px] tw-py-5 hover:tw-bg-violet-500/[0.25] tw-font-sans'
              onClick={(e) => handleClickSearch(e)}
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
