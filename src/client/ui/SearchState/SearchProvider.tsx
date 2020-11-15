import React, { FC, useState, useMemo, useRef, memo } from 'react'

import { SearchQueryContext, SearchTagsContext } from './SearchContext'

const SearchProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
	const [query, setQuery] = useState('')

	const [searchTags, setSearchTags] = useState<string[]>([])
	const searchTagsRef = useRef(searchTags)
	searchTagsRef.current = searchTags
	const searchTagsActions = useMemo(
		() => ({
			addSearchTag: (tag: string) => setSearchTags([...searchTagsRef.current, tag]),
			removeSearchTag: (tag: string) => setSearchTags(searchTagsRef.current.filter(t => t !== tag)),
		}),
		[],
	)

	const searchQueryValue = useMemo(() => ({ query, setQuery }), [query, setQuery])
	const searchTagsValue = useMemo(() => ({ searchTags, ...searchTagsActions }), [searchTags, searchTagsActions])

	return (
		<SearchTagsContext.Provider value={searchTagsValue}>
			<SearchQueryContext.Provider value={searchQueryValue}>{children}</SearchQueryContext.Provider>
		</SearchTagsContext.Provider>
	)
}

const MemoSearchProvider = memo(SearchProvider)
export { MemoSearchProvider as SearchProvider }
