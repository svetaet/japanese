import { createContext } from 'react'

export type SearchQueryStateT = {
	query: string
	setQuery: (query: string) => void
}
export type SearchTagsStateT = {
	searchTags: string[]
	addSearchTag: (tag: string) => void
	removeSearchTag: (tag: string) => void
}

const createFunctionStub = (contextName: string) => () =>
	console.error(`${contextName} was invoked out of provider scope`)

export const SearchQueryContext = createContext<SearchQueryStateT>({
	query: '',
	setQuery: createFunctionStub('SearchQueryContext'),
})
export const SearchTagsContext = createContext<SearchTagsStateT>({
	searchTags: [],
	addSearchTag: createFunctionStub('SearchTagsContext'),
	removeSearchTag: createFunctionStub('SearchTagsContext'),
})
