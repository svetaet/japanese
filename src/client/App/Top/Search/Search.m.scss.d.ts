declare namespace SearchMScssNamespace {
	export interface ISearchMScss {
		CloseIcon: string
		Input: string
		InputWrap: string
		Search: string
		SearchIcon: string
		Tag: string
		TagIcon: string
		'color-shift': string
	}
}

declare const SearchMScssModule: SearchMScssNamespace.ISearchMScss & {
	/** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
	locals: SearchMScssNamespace.ISearchMScss
}

export = SearchMScssModule
