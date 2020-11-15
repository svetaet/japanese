import { useContext } from 'react'
import { SearchTagsContext } from './SearchContext'

export const useSearchTags = () => useContext(SearchTagsContext)
