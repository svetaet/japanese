declare namespace AppMScssNamespace {
	export interface IAppMScss {
		App: string
		Cards: string
		Center: string
	}
}

declare const AppMScssModule: AppMScssNamespace.IAppMScss & {
	/** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
	locals: AppMScssNamespace.IAppMScss
}

export = AppMScssModule
