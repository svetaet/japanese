declare namespace TopMScssNamespace {
	export interface ITopMScss {
		Top: string
	}
}

declare const TopMScssModule: TopMScssNamespace.ITopMScss & {
	/** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
	locals: TopMScssNamespace.ITopMScss
}

export = TopMScssModule
