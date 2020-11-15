import { useContext } from 'react'
import { SearchQueryContext } from './SearchContext'

export const useSearchQuery = () => useContext(SearchQueryContext)
