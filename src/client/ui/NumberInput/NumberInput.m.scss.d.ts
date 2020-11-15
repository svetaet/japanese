declare namespace NumberInputMScssNamespace {
	export interface INumberInputMScss {
		NumberInput: string
	}
}

declare const NumberInputMScssModule: NumberInputMScssNamespace.INumberInputMScss & {
	/** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
	locals: NumberInputMScssNamespace.INumberInputMScss
}

export = NumberInputMScssModule
