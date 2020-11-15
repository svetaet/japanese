declare namespace IconButtonMScssNamespace {
	export interface IIconButtonMScss {
		IconButton: string
	}
}

declare const IconButtonMScssModule: IconButtonMScssNamespace.IIconButtonMScss & {
	/** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
	locals: IconButtonMScssNamespace.IIconButtonMScss
}

export = IconButtonMScssModule
