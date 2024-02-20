import { useEffect } from 'react'
import { Search } from 'react-bootstrap-icons'

function SearchBar ({ firstResponse, searchInput, setSearchInput, setResult, query }) {
  // Este useEffect permite que se actualice en tiempo real el query y que haga un set de itemsData para poder cargarl
  useEffect(() => {
    filterProductsSearched()
  }, [searchInput])

  useEffect(() => {
    if (query) {
      setSearchInput('')
    }
  }, [query])
  function filterProductsSearched () {
    setResult(firstResponse.filter(product => {
      return searchInput && product && product.product_name.toLowerCase().includes(searchInput.toLowerCase())
    }))
  }

  function handleInputChange (e) {
    setSearchInput(e.target.value)
  }
  return (
    <div
      className='tw-bg-white tw-w-100 tw-rounded-xl tw-h-10 tw-px-4 tw-py-0 tw-my-10 tw-shadow-md tw-flex tw-items-center'
    >
      <span className='input-group-text border-0 tw-bg-white' id='basic-addon1'>
        <Search className=' tw-fill-violet-500 tw-text-2xl' />
      </span>
      <input
        className='tw-bg-transparent tw-border-0 tw-ms-1 tw-h-100 tw-w-full tw-text-xl focus:tw-outline-none'
        value={searchInput}
        onChange={handleInputChange}
        id='searchInput'
        name='searchInput'
        type='search'
        placeholder='Search'
        aria-label='Search'
      />
    </div>
  )
}

export default SearchBar
